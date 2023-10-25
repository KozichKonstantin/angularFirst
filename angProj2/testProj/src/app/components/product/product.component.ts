import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/prod';
import { IProductEdit } from 'src/app/models/editProd';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: IProductEdit;
  deleting (value: number){
  }
}
