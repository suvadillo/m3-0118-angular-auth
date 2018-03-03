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
  public gameSocket: any;
  public counter: number;
  public currentQuestion: any;
  public note: any;
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
    this.socket.on('sending-game', game => {
      this.gameSocket = game;
      // this.getQuestions();
    });
    // receiving socket-back message to trigger questions
    this.socket.on('resend-question', gameStatus => {
      this.gameSocket.status = gameStatus.status;
      console.log(this.gameSocket.status);
      this.getQuestions();
    });

  }
  getQuestions() {
    console.log(this.gameSocket.questions[0])
    this.currentQuestion = this.gameSocket.questions[0]
    let counter = 1;
    const a = setInterval(() => {
      if (!this.gameSocket.questions[counter]) {
        clearInterval(a);
      } else {
        setTimeout(() => {
          console.log('this.currentQuestion: ');
          console.log(this.currentQuestion);
          // console.log(this.gameSocket.questions[counter]);
          this.currentQuestion = this.gameSocket.questions[counter];

          counter++;
        }, 500);
      }
    } , 1000);
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

  // sending gameId of created game to socket in back
  getGame(data: string) {
    this.socket.emit('get-game', {
      status: 'Game sent',
      gameId: data
    });
  }

  // sending message to socket-back to trigger questions
  sendQuestion(gameStatus: string) {
    this.socket.emit('send-question', {
      status: gameStatus
    });
  }

  // creating new game in DDBB
  getNewGame(name, userId) {
    return this.http.post(`${this.BASE_URL}/api/game/newGame`, {name, userId}, this.options)
      .map((res) => res.json());
  }

}
