import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
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
