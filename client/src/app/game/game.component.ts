import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { SessionService } from '../../services/session.service';
import { User } from '../interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameSocket: object;

  constructor(public chat: ChatService,
    public session: SessionService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => this.getGameData(params['id']));
    }

  ngOnInit() {
  }

  getGameData(id) {
    this.chat.getGame(id);
    this.gameSocket = this.chat.gameObj;
  }

  startGame() {
    console.log(this.gameSocket);
  }

}
