import { Component } from '@angular/core';
import { users } from 'src/app/models/user';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {
  public loginInp : string;
  public passwordInp: string;
  public value: string;
  verification( value:string){
    for(let i = 0; i < users.length; i++){
      if (value == users[i].login){
        console.log('verified')
      }else{
        console.log( value, users[i].login ,'err')
      }
    }
  }
}
