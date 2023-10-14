import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { User } from '../models/user';
import { userAuth } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  postAuth(user: userAuth): Observable<userAuth>{
    return this.http.post<userAuth>('http://127.0.0.1:3000/login', user);
  }
}
