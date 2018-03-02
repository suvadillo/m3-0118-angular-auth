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


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ChatComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
