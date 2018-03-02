import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Message, Game } from '../app/interfaces';

@Injectable()
export class ChatService {

  BASE_URL = 'http://localhost:3000';
  options: object = {withCredentials: true};
  public messages: Array<Message> = [];
  public notifications: Array<Notification> = [];
  socket: any;
  public gameObj: Game = {
    creator: '',
    name: '',
    questions: [''],
    timeToAnswer: 0,
    timeToStart: 0,
    status: '',
    players: [],
    ranking: []
  };
  public currentQuestion: Array<any> = [''];
  public counter: number;
  public timer: number;

  constructor(private http: Http, ) {

    this.socket = io(`${this.BASE_URL}`);
    this.socket.on('connect', () => console.log('Connected to WS'));
    this.socket.on('chat', m => {
      console.log('Mensaje recibido');
      this.messages.push({
        message: m.message,
        type: 'other'
      });
    });
    this.socket.on('start-game', game => {
      this.gameObj = game;
    });

  }


  sendMessage(m: string) {
    this.socket.emit('chat-ready', {
      status: 'Mensaje recibido',
      message: m
    });
    this.messages.push({
      message: m,
      type: 'me'
    });
  }

  getGame(data: string) {
    this.socket.emit('get-game', {
      status: 'Game sent',
      gameId: data
    });
  }

  getNewGame(name, userId) {
    return this.http.post(`${this.BASE_URL}/api/game/newGame`, {name, userId}, this.options)
      .map((res) => res.json());
  }

}
