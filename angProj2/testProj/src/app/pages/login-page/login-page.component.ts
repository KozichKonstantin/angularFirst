import { Component, OnInit } from '@angular/core';
import { userAuth, users } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginInp : string;
  public passwordInp: string;
  public value: string;
  public login: string;
  public password: string;
  public user: userAuth;
  verification( value:string){
    for(let i = 0; i < users.length; i++){
      if (value == users[i].login){
        console.log('verified')
      }else{
        console.log( value, users[i].login ,'err')
      }
    }
  }
  constructor (private authService: AuthService){
    this.user = {
      login : this.loginInp,
      password : this.passwordInp
    }
  }
  authorize() : void{
    console.log(this.user)
    this.authService.postAuth(this.user).subscribe((user) => {
      this.user = user;
      console.log(this.user)
    });
  }
  // ngOnInit(): void {
  //   this.authService.postAuth(this.user).subscribe((user) => {
  //     this.user = user;
  //     console.log(this.user)
  //   });
  // }
}
