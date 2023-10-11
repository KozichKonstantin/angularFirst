import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/prod';
import { ProductsService } from 'src/app/services/products-service';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { pagSet } from 'src/app/data/paginations';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  products: IProduct[] = [];
  page = pagSet.page;
  pageSize =  pagSet.pageSize;
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getQ().subscribe((products) => {
      this.products = products;
    });
  }
}
