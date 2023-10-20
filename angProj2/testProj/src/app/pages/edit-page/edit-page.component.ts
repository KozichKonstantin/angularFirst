import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent {
  constructor(
    private router: Router){

  }
  post(){
    console.log('posted lol')
  }
  goHome(value: string = ''){
    if(value=='post'){
      console.log('like posted')
      this.router.navigate(['main'])
    }else{
      this.router.navigate(['main'])
    }
  }
}
