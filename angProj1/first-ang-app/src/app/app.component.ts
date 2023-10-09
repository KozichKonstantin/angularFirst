import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';
import { tap, delay, Observable } from 'rxjs';
import { ModalService } from './services/modal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'first-ang-app';
  loading = false;
  constructor(public productService: ProductsService, public modalService: ModalService) {}
  // products: IProduct[] = []
  // products$: Observable<IProduct[]>;
  term = '';
  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productService.getAll().subscribe( ()=>{
      this.loading = false;
    })
  }
}
