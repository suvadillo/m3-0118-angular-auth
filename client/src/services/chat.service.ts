import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

interface Message {
  message: string;
  type: string;
}

interface Notification {
  message: string;
  type: string;
}

@Injectable()
export class ChatService {
  BASE_URL = 'http://localhost:3000';
  public messages: Array<Message> = [];
  public notifications: Array<Notification> = [];
  socket: any;
  public gameObj = {
    name: 'NombreJuego'
  };

  constructor(private http: Http) {
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
      // this.gameObj.name = game.name;
      console.log(game);
      // this.game.push({
      //   message: m.message,
      //   type: 'other'
      // });
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

  startGame(data: string) {
    this.socket.emit('start-game', {
      status: 'Game started sent',
      gameId: data
    });
    this.notifications.push({
      message: data,
      type: 'startGame'
    });
  }

  getNewGame(name) {
    return this.http.post(`${this.BASE_URL}/api/game/newGame`, {name})
      .map((res) => res.json());
  }
}
