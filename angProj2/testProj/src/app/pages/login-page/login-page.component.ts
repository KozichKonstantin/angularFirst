import { Component, OnInit } from '@angular/core';
import { userAuth, users } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  public loginInp : string;
  public passwordInp: string;
  public value: string;
  public login: string;
  public password: string;
  public user: userAuth;
  public term : string;
  public searchValue: string;
  constructor (private authService: AuthService){
    this.user = {
      login : this.loginInp,
      password : this.passwordInp
    }
    this.term ='';
    this.authorize();
  }
  authorize(login: string= '', password: string= '') : void{
    this.user.login = login;
    this.user.password = password;
    this.authService.postAuth(this.user).subscribe((user) => {
      this.user = user;
      console.log(this.user)
    });
  }
  ngOnInit(): void {
    // this.authService.postAuth(this.user).subscribe((user) => {
    //   this.user = user;
    //   console.log(this.user)
    // });
  }
}
