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
  currentQuestion: object;
  user: User;

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
      console.log(`Devuelvo el objeto juego desde el componente `);
      console.log(game);
      });
  }
  getQuestions() {
    console.log(this.game.questions[0]);
    let counter = 1;
    const a = setInterval(() => {
      if (!this.game.questions[counter]) {
        clearInterval(a);
      } else {
        console.log(this.game.questions[counter]);
        counter++;
      }
    } , 1000);
  }
}
