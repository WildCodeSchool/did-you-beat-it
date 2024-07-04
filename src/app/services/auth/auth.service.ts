import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8080/users"
  constructor(private http: HttpClient) { }

  login (email: string, password: string): Observable<any> {
    const body = JSON.stringify({ email, password })
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}/login`, body,{headers}).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('token', response.token);
          return response;
        }
      }))
  }
 
  register(username : string, email : string,password : string, confirmPassword : string): Observable<any> {
    const body = JSON.stringify({ username, email, password });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}/register`, body,{headers});
  }


}
