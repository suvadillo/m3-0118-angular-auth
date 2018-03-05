import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Game, User } from '../interfaces';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.css']
})
export class GamesHomeComponent implements OnInit {
  games: Array<Game>;
  user: User;

  constructor(public chat: ChatService, public session: SessionService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.chat.getGames().subscribe( games => {
      this.games = games;
      console.log(this.games);
    });
  }

  joinGame(gameId) {
    this.user = this.session.getUser();
    this.chat.joinGame(gameId, this.user);
  }

}
