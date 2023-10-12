import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/prod';
import { ProductsService } from 'src/app/services/products-service';
import { SearchComponent } from 'src/app/components/search/search.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  products: IProduct[] = [];
  public term : string;
  public page : number;
  public pageSize : number;
  public collectionSize : number;
  constructor(private productsService: ProductsService) {
    this.page = 1;
    this.pageSize = 4;
    this.term =''
  }
  ngOnInit(): void {
    this.productsService.getQ().subscribe((products) => {
      this.products = products;
    });
  }
}
