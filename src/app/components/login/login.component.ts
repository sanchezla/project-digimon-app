import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  public contentType: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
     
    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/home']);
      }).catch( err => console.log('err', err.message));
    }

  onClickGoogleLogin() {
   this.authService.loginGoogle()
    .then((res) => {
        this.router.navigate(['/home']);
        this.ngZone.run(() => this.navigateTo('/home'));
    }).catch( err => console.log(err.message));
  }

  navigateTo(url) {

    this.router.navigate([url]);

}


}
