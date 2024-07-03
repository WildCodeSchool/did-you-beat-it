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
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('isOnline', 'true'); 
          console.log(response)
          return response;
        }else {
          console.error('Invalid response from API during login.');
        }
      }))
  }
 
  register(username : string, email : string,password : string, confirmPassword : string): Observable<any> {
    const body = JSON.stringify({ username, email, password });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}/register`, body,{headers});
  }


}
