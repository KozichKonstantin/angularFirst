import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/prod';
import { products as data } from '../../data/products';
import { ProductsService } from 'src/app/services/products-service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  products: IProduct[]= data;
  constructor(private productsService: ProductsService){
  }
  ngOnInit(): void {
    this.productsService.getAll().subscribe(products=>{
      this.products = products
    })
  }
}
