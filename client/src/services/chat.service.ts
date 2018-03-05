import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Message, Game, User } from '../app/interfaces';
import { SessionService } from './session.service';
import { Router } from '@angular/router';

@Injectable()
export class ChatService {

  BASE_URL = 'http://localhost:3000';
  options: object = {withCredentials: true};
  public messages: Array<Message> = [];
  public notifications: Array<Notification> = [];
  socket: any;
  public gameSocket: Game;
  public counter: number;
  public currentQuestion: any;
  public note: any;
  public timer: number;
  public statusOption: string = 'unselected';
  public userAnswers: Array<any> = [];
  public userRecord: number;
  public user: User;
  public gameFinished: boolean;
  public gameRanking: Array<any>;
  public creator:boolean = false;

  constructor(private http: Http, public session: SessionService, public router: Router) {
    this.session.userReady.subscribe( u => {
      return this.user = u;
    });
    this.gameFinished = false;
    this.socket = io(`${this.BASE_URL}`);
    this.socket.on('connect', () => console.log('Connected to WS'));
    this.socket.on('chat', m => {
      console.log('Mensaje recibido');
      this.messages.push({
        message: m.message,
        type: 'other'
      });
    });
    this.socket.on('sending-game', game => {
      this.gameSocket = game;
    });
    // receiving socket-back message to trigger questions
    this.socket.on('resend-question', gameStatus => {
      this.gameSocket.status = gameStatus.status;
      console.log(this.gameSocket.status);
      this.userRecord = 0;
      this.getQuestions();
    });

    this.socket.on('ranking-game', data => {
      this.gameSocket = data.gameData;
      this.drawRanking();
      this.note = data.status;
      this.currentQuestion = '';
      this.gameFinished = true;
    });
  }

  getQuestions() {
    this.currentQuestion = this.gameSocket.questions[0];
    let counter = 1;
    const a = setInterval(() => {
      if (!this.gameSocket.questions[counter]) {
        clearInterval(a);
        this.getRankingGame();

      } else {
        setTimeout(() => {
          if (this.userAnswers.length < counter) { this.userAnswers.push('x'); }
          this.currentQuestion = this.gameSocket.questions[counter];
          this.statusOption = 'unselected';
          counter++;
        }, 500);
      }
    } , 5000);
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

  // sending gameId of created game to socket in back
  getGame(data: string) {
    this.socket.emit('get-game', {
      status: 'Game sent',
      gameId: data
    });
  }

  joinGame(gameId, player) {
    console.log('player en service');
    console.log(player);
    this.updateGame(gameId, 0, player._id).subscribe( game => {
      this.gameSocket = game;
      this.socket.emit('get-game', {
        status: 'Game sent',
        gameId: gameId
      });
      this.router.navigate(['/chat']);
      console.log(this.gameSocket);
    });
  }

  // sending message to socket-back to trigger questions
  // update status game to 'started'
  sendQuestion(gameStatus: string) {
    this.updateGame(this.gameSocket._id, gameStatus, 0).subscribe( game => {
      this.gameSocket = game;
    });
    this.socket.emit('send-question', {
      status: gameStatus
    });
  }

  // creating new game in DDBB
  getNewGame(name, userId, numQ) {
    return this.http.post(`${this.BASE_URL}/api/game/newGame`, {name, userId, numQ}, this.options)
      .map((res) => res.json());
  }

  // sending data to socket-back to end the game
  getRankingGame() {
    const username = this.session.getUser().username;
    console.log('username in getRankingGame:');
    console.log(username);
    this.updateFinishedGame(this.gameSocket._id, username, this.userRecord).subscribe( game => {
      this.socket.emit('end-game', {
        status: 'Game finished',
        gameData: game
      });
    });
  }

  updateGame(gameId, gameStatus, player) {
    return this.http.put(`${this.BASE_URL}/api/game/${gameId}`, {gameStatus, player}, this.options)
      .map((res) => res.json());
  }

  updateFinishedGame(gameId, user, userScore) {
    return this.http.post(`${this.BASE_URL}/api/game/${gameId}`, {user, userScore}, this.options)
      .map((res) => res.json());
  }

  drawRanking() {
    this.gameRanking = this.gameSocket.ranking;
    this.gameRanking.sort((a, b) => (a.score <= b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
  }

  getGames() {
    return this.http.get(`${this.BASE_URL}/api/game`, this.options)
      .map((res) => res.json());
  }

}
