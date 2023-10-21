import { Component, OnInit } from '@angular/core';
import { userAuth } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {mainpageguardGuard} from 'src/app/services/guard.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public loginInp: string;
  public passwordInp: string;
  public value: string;
  public login: string;
  public user: userAuth;
  public term: string;
  public abilities: string;
  public searchValue: string;
  public loginErr: boolean;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = {
      login: this.loginInp,
      password: this.passwordInp,
      abilities: this.abilities,
    };
    this.term = '';
    console.log(this.loginErr);
    /**
     *
     * * */
  }
  goHome() {
    if (this.user.abilities == 'limited' || this.user.abilities == 'full') {
      this.loginErr = false;
      localStorage.setItem('abilities', this.user.abilities);
      mainpageguardGuard
      this.router.navigate(['main'])
    } else {
      console.log('error, not authorized');
      this.loginErr = true;
      localStorage.setItem('abilities', this.user.abilities);
      mainpageguardGuard
    }
  }
  authorize(login: string = '', password: string = ''): void {
    this.user.login = login;
    this.user.password = password;
    this.authService.postAuth(this.user).subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.goHome();
    });
  }
  ngOnInit(): void {}
}
