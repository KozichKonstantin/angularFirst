import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/prod';
import { Observable } from 'rxjs';
import { userAuth } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private http: HttpClient) { }
  postSave(newProd: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>('http://127.0.0.1:3000/save', newProd)
  }
}
