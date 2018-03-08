import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Game, User } from '../interfaces';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.css']
})
export class GamesHomeComponent implements OnInit {
  games: Array<Game>;
  user: User;
  admin: string = 'goiko';
  // game: Game;

  constructor(public chat: ChatService, public session: SessionService, public router: Router) {
    this.user = this.session.getUser();
    this.session.getUserEvent()
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.chat.getGames().subscribe( games => {
      this.chat.allGames = games;
      // this.games = games;
      console.log(this.games);
    });
  }

  joinGame(gameId) {
    this.user = this.session.getUser();
    this.chat.joinGame(gameId, this.user);
    // this.chat.getAllGames();
    console.log('this.user en games-home.component:');
    console.log(this.user);
  }

  getNewGame(n, num) {
    let name = '';
    let numQuesCat = 0;
    n ? name = n : name = 'Trivial-Coding-Game';
    num ? numQuesCat = num : numQuesCat = 2;
    // console.log('this.user.chat');
    // console.log(this.chat.user);
    this.chat.getNewGame(name, this.user._id, numQuesCat).subscribe( game => {
      // this.game = game;
      this.chat.getGame(game._id);
      setTimeout(() => {
        if (this.chat.gameSocket.creator._id === this.user._id) {
          this.chat.creator = true;
        }
        this.chat.getAllGames();
      }, 500);
      this.getGames();
      this.router.navigate(['/chat']);
      });
  }
}
