import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  error: string;
  constructor(public session: SessionService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.session.login(this.username, this.password)
    .catch(e => this.error = e)
    .subscribe(user => {
      this.router.navigate(['/gameshome']);
      // console.log(`Welcome ${user.username}`);
    });
  }

  signup() {
    this.session.signup(this.username, this.password)
    .catch(e => this.error = e)
    .subscribe(user => {
      this.router.navigate(['/gameshome']);
      // console.log(`Welcome ${user.username}`);
    });
  }

  logout() {
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }

}
