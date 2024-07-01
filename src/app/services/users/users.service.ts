import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = "https://localhost:8080";

  private http:HttpClient = inject(HttpClient);

  constructor() { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`)
  }

  getOneBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${slug}`)
  }

  createUser(user:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user)
  }

  updateUser(id:number, user:any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${id}`, user)
  }

  deleteUser(id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`)
  }

}
