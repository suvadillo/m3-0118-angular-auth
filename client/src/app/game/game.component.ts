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
  user: User;

  constructor(public chat: ChatService,
    public session: SessionService,
    private router: Router,
    private route: ActivatedRoute) {

      this.route.params.subscribe( params => this.getGameData(params['id']));
      this.user = this.session.getUser();
      this.session.getUserEvent()
        .subscribe(user => this.user = user);

    }

  ngOnInit() {
  }

  getGameData(id) {
    this.chat.getGame(id);
    this.gameSocket = this.chat.gameSocket;
  }

  startGame() {
    console.log(this.gameSocket);
  }

}
