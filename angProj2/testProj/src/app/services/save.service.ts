import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/prod';
import { Observable } from 'rxjs';
import { userAuth } from '../models/user';
import { IProductEdit } from '../models/editProd';
@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private http: HttpClient) { }
  postSave(newProd: IProductEdit): Observable<IProductEdit>{
    return this.http.post<IProductEdit>('http://127.0.0.1:3000/save', newProd)
  }
}
