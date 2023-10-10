import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/prod';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    const body = { min: 0, max: 4 };
    return this.http.post<IProduct[]>('http://127.0.0.1:3000/postinfo', body);
  }
  getQ(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://127.0.0.1:3000/getInfo')
  }
}
