import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse } from '../models/response.model';

const baseUrl='http://127.0.0.1:3500/users/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    

  constructor(private http:HttpClient) {
  }
  
  getAllUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(baseUrl);
  }


  
}
