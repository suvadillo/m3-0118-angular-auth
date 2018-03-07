import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { ChatService } from '../services/chat.service';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { GameComponent } from './game/game.component';
import { GamesHomeComponent } from './games-home/games-home.component';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ChatComponent,
    GameComponent,
    GamesHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot()
  ],
  providers: [SessionService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
