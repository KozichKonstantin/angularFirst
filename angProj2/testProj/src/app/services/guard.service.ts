import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  isLoggedIn:boolean;
  login(value: boolean): void{
    this.isLoggedIn = value;
  }
  logout(value: boolean): void{
    this.isLoggedIn = value;
  }
  constructor() { }
}
