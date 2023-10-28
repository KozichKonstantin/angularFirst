import { Component, OnInit } from '@angular/core';
import { IProductEdit } from 'src/app/models/editProd';
import { ProductsService } from 'src/app/services/products-service';
import { Router } from '@angular/router';
import { EditPageComponent } from '../edit-page/edit-page.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  products: IProductEdit[] = [];
  public term: string;
  public searchValue: string;
  public page: number;
  public pageSize: number;
  public collectionSize: number;
  delete(product: IProductEdit) {
    this.products = this.products.filter((productEl) => productEl !== product);
  }
  checkUser() {
    if (localStorage.getItem('abilities') == 'full') {
      return true;
    } else {
      return false;
    }
  }
  checkEditions(){
    if(localStorage.getItem('edit') != null ){
      const eddited: IProductEdit = JSON.parse(localStorage.getItem('edit')+ '')
      this.products[eddited.id] = eddited;
    }
  }
  editingPage(type: string = 'addNew', id: number = 0) {
    if (type == 'addNew') {
      this.router.navigate(['edit']);
      localStorage.setItem('action', 'add')
    } else {
      let editProd: IProductEdit = {
        id: id,
        name: this.products[id].name,
        model: this.products[id].model,
        type: this.products[id].type,
        range: this.products[id].range,
        unit: this.products[id].unit,
        location: this.products[id].location,
      };
      localStorage.setItem('edit', JSON.stringify(editProd));
      localStorage.setItem('action', 'edit')
      this.router.navigate(['edit']);
    }
  }
  changeTerm(searchValue = ''): void {
    this.term = searchValue;
  }
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.page = 1;
    this.pageSize = 4;
    this.term = '';
    this.changeTerm();
  }
  ngOnInit(): void {
    this.productsService.getQ().subscribe((products) => {
      this.products = products;
      this.checkEditions();
      if (localStorage.getItem('newProd') != null) {
        localStorage.getItem('newProd');
        this.products.push(JSON.parse('' + localStorage.getItem('newProd')));
        // localStorage.removeItem('newProd')
      }
    });
  }
}
