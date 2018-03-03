import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { SessionService } from '../../services/session.service';
import { User, Game } from '../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msgToSend: string;
  game: Game;
  currentQuestion: any;
  user: User;
  creator: boolean = false;

  constructor(public chat: ChatService, public session: SessionService, public router: Router) { }

  ngOnInit() {}

  sendMessage() {
    console.log(`Enviando mensaje: ${this.msgToSend}`);
    this.chat.sendMessage(this.msgToSend);
    this.msgToSend = '';
  }

  getNewGame(n) {
    console.log('Creado nuevo juego desde el front');
    let name = '';
    n ? name = n : name = 'Trivial-Game';
    this.user = this.session.getUser();
    this.chat.getNewGame(name, this.user._id).subscribe( game => {
      this.game = game;
      this.chat.getGame(game._id);
      setTimeout(() => {
        if (this.chat.gameSocket.creator._id === this.user._id) {
          this.creator = true;
        }
      }, 500);
      });
  }
  getQuestions() {
    let counter = 0;
    const a = setInterval(() => {
      if (!this.chat.gameSocket.questions[counter]) {
        clearInterval(a);
      } else {
        this.chat.sendQuestion(this.chat.gameSocket.questions[counter]);
        setTimeout(() => {
          console.log('this.chat.currentQuestion: ');
          console.log(this.chat.currentQuestion.currentQ);
          counter++;
        }, 500);
      }
    } , 1000);
  }
}