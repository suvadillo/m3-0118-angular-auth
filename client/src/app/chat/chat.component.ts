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
  // record: Array<any> = [];
  // statusOption: string;

  constructor(public chat: ChatService, public session: SessionService, public router: Router) {
    this.user = this.session.getUser();
    this.session.getUserEvent()
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  sendMessage() {
    console.log(`Enviando mensaje: ${this.msgToSend}`);
    this.chat.sendMessage(this.msgToSend);
    this.msgToSend = '';
  }

  recordAnswer(i, correctOption) {
    if (this.chat.statusOption === 'unselected') {
      this.chat.userAnswers.push(i);
      if (i === correctOption) { this.chat.userRecord++; }
    }
    document.getElementById(`option${i}`).setAttribute('style', 'background-color: plum');
    this.chat.statusOption = 'selected';

    console.log('i: ' + i + ' / correct: ' + correctOption);
    console.log('userAnswers:');
    console.log(this.chat.userAnswers);
    console.log('userRecord:');
    console.log(this.chat.userRecord);
  }

  goHome() {
    this.router.navigate(['/gameshome']);
  }
}
