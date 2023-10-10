import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs'
import { IProduct } from '../models/prod'
@Injectable({
    providedIn: 'root'
})
export class ProductsService{
    constructor (private http: HttpClient){
    }
    getAll(): Observable<IProduct[]>{
       return this.http.get<IProduct[]>('http://127.0.0.1:3000/getInfo', {
        params: new HttpParams().append('limit', 6)
       })
    }
}