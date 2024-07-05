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
  getIdInToken(): number | undefined {
    const storedToken = localStorage?.getItem('token');
    if (storedToken) {
      const decoded = jwtDecode<Token>(storedToken);

      return decoded.id;
    }
    return undefined;
  }
}
