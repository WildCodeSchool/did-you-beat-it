import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { game } from './models/game';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private http= inject(HttpClient);
  constructor() { }

  getGames():Observable<game[]>{
    return this.http.get<game[]>("assets/games.json") }
}
