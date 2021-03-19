import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse } from '../models/responseUsers.model';
import { UserResponse } from '../models/responseUser.model';

const baseUrl='http://127.0.0.1:3500/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    
  constructor(private http:HttpClient) {
  }
  
  getAllUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(baseUrl + 'users');
  }

  createUser(data: any): Observable<UsersResponse> {
    return this.http.post(baseUrl + 'user', data);
  }

  getUser(id: any): Observable<UserResponse> {
    return this.http.get(`${baseUrl}user/${id}`);
  }

  updateUser(id: any, data: any): Observable<UserResponse> {
    return this.http.put(`${baseUrl}user/${id}`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}user/${id}`);
  }
  
}
