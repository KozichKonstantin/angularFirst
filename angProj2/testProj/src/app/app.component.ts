import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduct } from './models/prod';
import { products as data } from './data/products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProj';
  // products: IProduct[]= data;

}
