import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/prod';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent {
  public nameInp: string;
  public modelInp: string;
  public numberMin: string;
  public numberMax: string;
  public typeSelect: string;
  public unitSelect: string;
  public locationInp: string;

  constructor(
    private router: Router){

  }
  post(){
    console.log('posted lol')
  }
  saveEl(a: string, b: string, c: string, d: string, e: string, f: string, g: string){
    const newProd: IProduct = {
      name :a,
      model : b,
      type : c,
      range : (d + ' ' + e),
      unit: f,
      location: g
    }
    return console.log(newProd)

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
