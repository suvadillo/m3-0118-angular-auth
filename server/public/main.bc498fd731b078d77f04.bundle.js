webpackJsonp([1],{0:function(t,e,n){t.exports=n("x35b")},1:function(t,e){},"4UQF":function(t,e){t.exports='<div>\n  <div *ngFor=\'let game of games\'>\n    <h2>{{ game.name }}</h2>\n    <p>Created by <b>{{ game.creator.username }}</b></p>\n    <p>Game Status: {{ game.status }}</p>\n    <div *ngIf=\'game.status === "ready"\'>\n      <button (click)=\'joinGame(game._id)\'>Join this Game</button>\n    </div>\n  </div>\n</div>\n<hr>\n\n<div *ngIf=\'user.username === admin\'>\n  <label for="">Name for the New Game</label>\n  <input type="text" [(ngModel)]="nameGame" />\n  <hr>\n  <label for="">Number of questions per category</label>\n  <input type="number" [(ngModel)]="numberQuestionsCat" />\n  <button (click)="getNewGame(nameGame, numberQuestionsCat)">Create New Game</button>\n</div>\n  \n<hr>\n'},"5xMp":function(t,e){t.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<div style="text-align:center">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n\n  <router-outlet></router-outlet>\n\n  \x3c!-- <app-chat></app-chat> --\x3e\n</div>\n\n\x3c!-- <app-login-form></app-login-form> --\x3e\n'},"8q1w":function(t,e){t.exports='<p>\n  game works!\n</p>\n<button (click)="startGame()">Start Game</button>\n'},"9rA2":function(t,e){t.exports=".chat{\n  padding: 20px;\n  width: 400px;\n  margin: 0 auto;\n}\n.conversations{\n  border: 1px solid black;\n  padding: 20px;\n}\n.sender{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\ninput{\n  font-size: 20px;\n  width: 80%;\n}\nbutton{\n  width: 20%;\n}\n.mensaje{\n  color: black;\n}\n.me{\n  text-align: right;\n}\n.other{\n  text-align: left;\n}\n.me .text{\n  background: lightgreen;\n}\n.other .text{\n  background: lightgray;\n}\n.text{\n  padding: 8px 20px;\n  border-radius: 10px;\n  display: inline-block;\n}\n.unselected{\n  background-color: buttonface;\n}\n.selected{\n  background-color: lightpink;\n}"},E20h:function(t,e){t.exports=".error{\n    background-color:red;\n    color: white;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 5px;\n}"},JS6j:function(t,e){t.exports=""},Jnfr:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="Jnfr"},okgc:function(t,e){t.exports=""},qSPs:function(t,e){t.exports='<h1> Authentication Sample </h1>\n<div *ngIf="!session.getUser()">\n  <form>\n    <h2> Login or Signup </h2>\n    <label> Username </label>\n    <input type="text" [(ngModel)]="username" name="username"/>\n    <br>\n    <label> Password </label>\n    <input type="password" [(ngModel)]="password" name="password"/>\n    <div>\n      <button (click)="login()"> login </button>\n      <button (click)="signup()"> signup </button>\n    </div>\n  </form>\n  <p *ngIf="error" class="error"> {{ error }} </p>\n</div>\n\n<div *ngIf="session.getUser()">\n  <pre> {{ session.getUser() | json }} </pre>\n  <button (click)="logout()"> Logout </button>\n</div>\n'},tsPk:function(t,e){t.exports=""},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("WT6e"),s=n("4PVY"),i=n("OE0E"),r=n("7DMc"),a=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},c=function(){function t(){this.title="Trivial Coding Game"}return t=a([Object(o.n)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]})],t)}(),u=n("NOoU"),h=(n("owTz"),n("xgm2"),n("XZJt")),p={production:!0,BASE_URL:""},l=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t){this.http=t,this.BASEURL=p.BASE_URL,this.options={withCredentials:!0},this.userEvent=new o.v,this.isLoggedIn().subscribe()}return t.prototype.getUser=function(){return this.user},t.prototype.getUserEvent=function(){return this.userEvent},t.prototype.configureUser=function(t){var e=this;return void 0===t&&(t=!1),function(n){return t?(e.user=n,e.userEvent.emit(n),console.log("Setting user, welcome "+e.user.username)):(console.log("bye bye "+e.user.username),e.user=null,e.userEvent.emit(null)),n}},t.prototype.handleError=function(t){return console.log(t),h.a.throw(t.json().message)},t.prototype.signup=function(t,e){return this.http.post(this.BASEURL+"/api/auth/signup",{username:t,password:e},this.options).map(function(t){return t.json()}).map(this.configureUser(!0)).catch(this.handleError)},t.prototype.login=function(t,e){return this.http.post(this.BASEURL+"/api/auth/login",{username:t,password:e},this.options).map(function(t){return t.json()}).map(this.configureUser(!0)).catch(this.handleError)},t.prototype.logout=function(){return this.http.get(this.BASEURL+"/api/auth/logout",this.options).map(function(t){return t.json()}).map(this.configureUser(!1)).catch(this.handleError)},t.prototype.isLoggedIn=function(){return this.http.get(this.BASEURL+"/api/auth/loggedin",this.options).map(function(t){return t.json()}).map(this.configureUser(!0)).catch(this.handleError)},t=l([Object(o.A)(),g("design:paramtypes",[u.a])],t)}(),d=n("bfOx"),m=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(){function t(t,e){this.session=t,this.router=e}return t.prototype.ngOnInit=function(){},t.prototype.login=function(){var t=this;this.session.login(this.username,this.password).catch(function(e){return t.error=e}).subscribe(function(e){t.router.navigate(["/gameshome"])})},t.prototype.signup=function(){var t=this;this.session.signup(this.username,this.password).catch(function(e){return t.error=e}).subscribe(function(e){t.router.navigate(["/gameshome"])})},t.prototype.logout=function(){var t=this;this.session.logout().catch(function(e){return t.error=e}).subscribe()},t=m([Object(o.n)({selector:"app-login-form",template:n("qSPs"),styles:[n("E20h")]}),b("design:paramtypes",[f,d.b])],t)}(),v=n("DmT9"),k=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(){function t(t,e,n){var o=this;this.http=t,this.session=e,this.router=n,this.BASE_URL=p.BASE_URL,this.options={withCredentials:!0},this.messages=[],this.notifications=[],this.statusOption="unselected",this.userAnswers=[],this.creator=!1,this.user=this.session.getUser(),this.session.getUserEvent().subscribe(function(t){return o.user=t}),this.gameFinished=!1,this.socket=v(""+this.BASE_URL),this.socket.on("connect",function(){return console.log("Connected to WS")}),this.socket.on("chat",function(t){console.log("Mensaje recibido"),o.messages.push({message:t.message,type:"other"})}),this.socket.on("sending-game",function(t){o.gameSocket=t}),this.socket.on("resend-question",function(t){o.gameSocket.status=t.status,console.log(o.gameSocket.status),o.userRecord=0,o.getQuestions()}),this.socket.on("ranking-game",function(t){o.gameSocket=t.gameData,o.drawRanking(),o.note=t.status,o.currentQuestion="",o.gameFinished=!0})}return t.prototype.getQuestions=function(){var t=this;this.currentQuestion=this.gameSocket.questions[0];var e=1,n=setInterval(function(){t.gameSocket.questions[e]?setTimeout(function(){t.userAnswers.length<e&&t.userAnswers.push("x"),t.currentQuestion=t.gameSocket.questions[e],t.statusOption="unselected",e++},500):(clearInterval(n),t.getRankingGame())},5e3)},t.prototype.sendMessage=function(t){this.socket.emit("chat-ready",{status:"Mensaje recibido",message:t}),this.messages.push({message:t,type:"me"})},t.prototype.getGame=function(t){this.socket.emit("get-game",{status:"Game sent",gameId:t})},t.prototype.joinGame=function(t,e){var n=this;console.log("player en service"),console.log(e),this.updateGame(t,0,e._id).subscribe(function(e){n.gameSocket=e,n.socket.emit("get-game",{status:"Game sent",gameId:t}),n.router.navigate(["/chat"]),console.log(n.gameSocket)})},t.prototype.sendQuestion=function(t){var e=this;this.updateGame(this.gameSocket._id,t,0).subscribe(function(t){e.gameSocket=t}),this.socket.emit("send-question",{status:t})},t.prototype.getNewGame=function(t,e,n){return this.http.post(this.BASE_URL+"/api/game/newGame",{name:t,userId:e,numQ:n},this.options).map(function(t){return t.json()})},t.prototype.getRankingGame=function(){var t=this,e=this.session.getUser().username;console.log("username in getRankingGame:"),console.log(e),this.updateFinishedGame(this.gameSocket._id,e,this.userRecord).subscribe(function(e){t.socket.emit("end-game",{status:"Game finished",gameData:e})})},t.prototype.updateGame=function(t,e,n){return this.http.put(this.BASE_URL+"/api/game/"+t,{gameStatus:e,player:n},this.options).map(function(t){return t.json()})},t.prototype.updateFinishedGame=function(t,e,n){return this.http.post(this.BASE_URL+"/api/game/"+t,{user:e,userScore:n},this.options).map(function(t){return t.json()})},t.prototype.drawRanking=function(){this.gameRanking=this.gameSocket.ranking,this.gameRanking.sort(function(t,e){return t.score<=e.score?1:e.score<t.score?-1:0})},t.prototype.getGames=function(){return this.http.get(this.BASE_URL+"/api/game",this.options).map(function(t){return t.json()})},t=k([Object(o.A)(),R("design:paramtypes",[u.a,f,d.b])],t)}(),w=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},x=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},S=function(){function t(t,e,n){var o=this;this.chat=t,this.session=e,this.router=n,this.creator=!1,this.user=this.session.getUser(),this.session.getUserEvent().subscribe(function(t){return o.user=t})}return t.prototype.ngOnInit=function(){},t.prototype.sendMessage=function(){console.log("Enviando mensaje: "+this.msgToSend),this.chat.sendMessage(this.msgToSend),this.msgToSend=""},t.prototype.recordAnswer=function(t,e){"unselected"===this.chat.statusOption&&(this.chat.userAnswers.push(t),t===e&&this.chat.userRecord++),this.chat.statusOption="selected",console.log("i: "+t+" / correct: "+e),console.log("userAnswers:"),console.log(this.chat.userAnswers),console.log("userRecord:"),console.log(this.chat.userRecord)},t=w([Object(o.n)({selector:"app-chat",template:n("y5EM"),styles:[n("9rA2")]}),x("design:paramtypes",[j,f,d.b])],t)}(),G=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},O=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(){function t(t,e,n,o){var s=this;this.chat=t,this.session=e,this.router=n,this.route=o,this.route.params.subscribe(function(t){return s.getGameData(t.id)}),this.user=this.session.getUser(),this.session.getUserEvent().subscribe(function(t){return s.user=t})}return t.prototype.ngOnInit=function(){},t.prototype.getGameData=function(t){this.chat.getGame(t),this.gameSocket=this.chat.gameSocket},t.prototype.startGame=function(){console.log(this.gameSocket)},t=G([Object(o.n)({selector:"app-game",template:n("8q1w"),styles:[n("JS6j")]}),O("design:paramtypes",[j,f,d.b,d.a])],t)}(),U=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},E=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},A=function(){function t(t,e,n){var o=this;this.chat=t,this.session=e,this.router=n,this.admin="goiko",this.user=this.session.getUser(),this.session.getUserEvent().subscribe(function(t){o.user=t})}return t.prototype.ngOnInit=function(){this.getGames()},t.prototype.getGames=function(){var t=this;this.chat.getGames().subscribe(function(e){t.games=e,console.log(t.games)})},t.prototype.joinGame=function(t){this.user=this.session.getUser(),this.chat.joinGame(t,this.user)},t.prototype.getNewGame=function(t,e){var n=this,o="",s=0;o=t||"Trivial-Coding-Game",s=e||2,this.chat.getNewGame(o,this.user._id,s).subscribe(function(t){n.chat.getGame(t._id),setTimeout(function(){n.chat.gameSocket.creator._id===n.user._id&&(n.chat.creator=!0)},500),n.getGames(),n.router.navigate(["/chat"])})},t=U([Object(o.n)({selector:"app-games-home",template:n("4UQF"),styles:[n("tsPk")]}),E("design:paramtypes",[j,f,d.b])],t)}(),P=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"",component:y},{path:"chat",component:S},{path:"game/:id",component:_},{path:"gameshome",component:A},{path:"**",redirectTo:""}],I=this&&this.__decorate||function(t,e,n,o){var s,i=arguments.length,r=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r},M=function(){function t(){}return t=I([Object(o.I)({declarations:[c,y,S,_,A],imports:[i.a,u.b,r.a,d.c.forRoot(P)],providers:[f,j],bootstrap:[c]})],t)}();p.production&&Object(o._13)(),Object(s.a)().bootstrapModule(M).catch(function(t){return console.log(t)})},y5EM:function(t,e){t.exports='<div class="chat">\n  <div class="conversations">\n    <div class="mensaje" *ngFor="let m of chat.messages">\n      <div [ngClass]="m.type">\n          <div class="text">{{m.message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class="sender">\n    <input type="text" [(ngModel)]="msgToSend" />\n    <button (click)="sendMessage()">Enviar</button>\n  </div>\n</div>\n\n<hr>\n\x3c!-- <div>\n  <label for="">Name for the New Game</label>\n    <input type="text" [(ngModel)]="nameGame" />\n    <button (click)="getNewGame(nameGame)">Create New Game</button>\n</div> --\x3e\n\n<hr>\n\n<div *ngIf="this.chat.gameSocket">\n  <div class="game-board">\n    <h2>{{ this.chat.gameSocket.name }} - Created by {{ this.chat.gameSocket.creator.username }}</h2>\n    <hr>\n    <div *ngIf="this.chat.creator">\n      <p>Soy el creador del juego</p>\n      <button (click)=\'this.chat.sendQuestion("started")\'>Start Game</button>\n    </div>\n    <div *ngIf="!this.chat.creator">\n      <p>Game will start soon...</p>\n    </div>\n    <hr>\n  </div>\n</div>\n\n<div *ngIf=this.chat.currentQuestion>\n  <div class="game-started">\n    <div class="question">\n      <h2>{{ this.chat.currentQuestion.question }}</h2>        \n    </div>\n    <div class="answers">\n        <button [ngClass]="this.chat.statusOption" *ngFor="let item of this.chat.currentQuestion.options; let i = index" (click)="recordAnswer(i, this.chat.currentQuestion.correctOption)">{{ item }}</button>\n    </div>\n  </div>\n</div>\n<div *ngIf=\'this.chat.gameFinished\'>\n    <div class="game-ranking">\n      <h2>The game {{ this.chat.gameSocket.name }} is finished</h2>  \n      <h3>Here is the ranking:</h3>\n      <div class="ranking-item" *ngFor="let item of this.chat.gameRanking; let i = index">\n        <p><b>{{i + 1}} - {{ item.user }}</b></p>\n        <p>{{ item.score }}</p>     \n      </div>\n    </div>\n</div>'}},[0]);