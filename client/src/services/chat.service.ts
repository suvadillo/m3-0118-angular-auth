import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

interface Message {
    message: string;
    type: string;
}

@Injectable()
export class ChatService {
  BASE_URL = 'http://localhost:3000';
  public messages: Array<Message> = [];
  socket: any;
  game: any;

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

  getNewGame(name) {
    return this.http.post(`${this.BASE_URL}/api/game/newGame`, {name})
      .map((res) => res.json());
  }
}
