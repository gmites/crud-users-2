import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse } from '../models/responseUsers.model';
import { UserResponse } from '../models/responseUser.model';
import { environment as env} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    
  constructor(private http:HttpClient) {
  }
  
  getAllUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(env.baseUrl + 'users');
  }

  createUser(data: any): Observable<UsersResponse> {
    return this.http.post(env.baseUrl + 'user', data);
  }

  getUser(id: any): Observable<UserResponse> {
    return this.http.get(`${env.baseUrl}user/${id}`);
  }

  updateUser(id: any, data: any): Observable<UserResponse> {
    return this.http.put(`${env.baseUrl}user/${id}`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${env.baseUrl}user/${id}`);
  }
  
}
