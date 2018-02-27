import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

interface Message {
    message: string;
    type: string;
}

@Injectable()
export class ChatService {
  public messages: Array<Message> = [];
  socket: any;
  constructor() {
    this.socket = io('http://localhost:3000/');
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
}
