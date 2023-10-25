import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/prod';
import { IProductEdit } from '../models/editProd';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProductEdit[]> {
    let body = { min: 0, max: 4 };
    return this.http.post<IProductEdit[]>('http://127.0.0.1:3000/postinfo', body);
  }
  getQ(): Observable<IProductEdit[]>{
    return this.http.get<IProductEdit[]>('http://127.0.0.1:3000/getInfo',{
        headers: {
            min: '0',
            max: '12'
        }
    })
  }
}
