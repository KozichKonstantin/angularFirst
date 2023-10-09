import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { delay, Observable, throwError, catchError, retry, tap } from 'rxjs';
import { IProduct } from '../models/products';
import { ErrorService } from './error.service';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}
products: IProduct[]= []
  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(
        // delay(1000),
        retry(2),
        tap(products => this.products = products),
        catchError(this.errorHandler.bind(this))
      );
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      'https://fakestoreapi.com/products',
      product
    )
    .pipe(
        tap(prod => this.products.push(prod))
    )

  }
}
