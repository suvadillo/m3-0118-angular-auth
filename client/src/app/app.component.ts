import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username: string;
  password: string;
  imgUrl: string;
  error: string;
  constructor(public session: SessionService, public router: Router) {
  }

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
    .subscribe(() => this.router.navigate(['/']));
  }
}
