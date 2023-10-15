import { Component, OnInit } from '@angular/core';
import { userAuth, users } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
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
  public password: string;
  public user: userAuth;
  public term: string;
  public abilities: string;
  public searchValue: string;
  constructor(private authService: AuthService, private router: Router) {
    this.user = {
      login: this.loginInp,
      password: this.passwordInp,
      abilities: this.abilities
    };
    this.term = '';
    this.authorize();
  }
  goHome() {
    if (this.user.abilities =='limited' || this.user.abilities == 'full')  {
      localStorage.setItem('abilities', this.user.abilities)
      this.router.navigate(['main']);
    } else {
      console.log('error, not authorized');
      localStorage.setItem('abilities', this.user.abilities)
    }
  }
  authorize(login: string = '', password: string = ''): void {
    this.user.login = login;
    this.user.password = password;
    this.authService.postAuth(this.user).subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.goHome()
    });
  }
  ngOnInit(): void {}
}
