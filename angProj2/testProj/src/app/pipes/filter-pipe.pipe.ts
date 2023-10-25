import { Pipe, PipeTransform } from '@angular/core';
// import { IProduct } from '../models/prod';
import { IProductEdit } from '../models/editProd';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(products: IProductEdit[], search: string): IProductEdit[] {
    return products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.model.toLocaleLowerCase().includes(search.toLowerCase()) || 
    p.location.toLocaleLowerCase().includes(search.toLowerCase()) || 
    p.range.toLocaleLowerCase().includes(search.toLowerCase()) ||
    p.type.toLocaleLowerCase().includes(search.toLowerCase()) ||
    p.unit.toLocaleLowerCase().includes(search.toLowerCase())
  )}

}
