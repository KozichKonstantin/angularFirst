import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/prod';
import { ProductsService } from 'src/app/services/products-service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  products: IProduct[] = [];
  public term : string;
  public searchValue: string;
  public page : number;
  public pageSize : number;
  public collectionSize : number;
  func(product:IProduct, i:number){
    console.log(product, i)
    this.products = this.products.filter((productEl)=> productEl !== product)
  }
  changeTerm(searchValue = ''): void{
    this.term = searchValue;
    console.log(this.term, 'test')
  }
  constructor(private productsService: ProductsService) {
    this.page = 1;
    this.pageSize = 4;
    this.term ='';
    this.changeTerm();
  }
  ngOnInit(): void {
    this.productsService.getQ().subscribe((products) => {
      this.products = products;
    });
  }
}
