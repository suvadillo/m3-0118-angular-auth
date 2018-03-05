import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatComponent } from './chat/chat.component';
import { GameComponent } from './game/game.component';
import { GamesHomeComponent } from './games-home/games-home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: AppComponent},
  { path: '', component: LoginFormComponent},
  { path: 'chat', component: ChatComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'gameshome', component: GamesHomeComponent },
  { path: '**', redirectTo: ''},
];
