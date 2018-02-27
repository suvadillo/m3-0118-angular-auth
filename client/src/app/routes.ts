import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatComponent } from './chat/chat.component';


export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'login-signup', component: LoginFormComponent},
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: ''},
];
