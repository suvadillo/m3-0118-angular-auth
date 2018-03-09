import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams } from 'ngx-facebook';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  imgUrl: string;
  error: string;
  constructor(public session: SessionService, public router: Router, private fb: FacebookService) {
    console.log('Initializing Facebook');

    fb.init({
      appId: '538391203211368',
      version: 'v2.12'
    });
  }

  ngOnInit() {
  }

  loginFb() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch((error: any) => console.error(error));
  }

  getFbProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        this.username = res.name;
        this.imgUrl = `https://graph.facebook.com/${res.id}/picture`;
        this.saveUserFb(res.name, this.imgUrl, res.id);
        console.log('Got the users profile', res);
        let img = '<img src="https://graph.facebook.com/' + res.id + '/picture">';
        console.log(img);
        console.log(this.imgUrl);
      })
      .catch((error: any) => console.error(error));
  }
  saveUserFb (name, img, fbId) {
    this.session.loginFb(name, img, fbId)
    .catch(e => this.error = e)
    .subscribe(user => {
      this.router.navigate(['/gameshome']);
      console.log(`Welcome ${user.username}`);
      console.log('saveUserFb en componente');
      console.log(user);
    });
  }

}
