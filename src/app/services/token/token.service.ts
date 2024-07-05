import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
type  Token = {
  id:number;
  sub:string;
  iat:number;
  exp:number;
  }

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string | undefined {
    const token = localStorage.getItem('token');
    if(token) {
      return token;
    } else {
      return undefined;
    }
 
  }
  deleteToken(): void {
    localStorage.removeItem('token');
  }
  getIdInToken(): number | undefined {
    const storedToken = localStorage?.getItem('token');
    if (storedToken) {
      const decoded = jwtDecode<Token>(storedToken);

      return decoded.id;
    }
    return undefined;
  }
}
