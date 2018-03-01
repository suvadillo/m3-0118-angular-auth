import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msgToSend: string;
  game: object;
  gameId: any;

  constructor(public chat: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(`Enviando mensaje: ${this.msgToSend}`);
    this.chat.sendMessage(this.msgToSend);
    this.msgToSend = '';
  }

  startGame () {
    this.chat.startGame(this.gameId);
  }

  getNewGame(n) {
    let name = '';
    n ? name = n.value : name = 'Trivial-Game';
    this.chat.getNewGame(name).subscribe( game => {
      this.game = game;
      this.gameId = game._id;
      this.startGame();
    });
  }
}
