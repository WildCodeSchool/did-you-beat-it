import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl: string = '/games';
  private genreUrl : string = 'genres'
  private LIMIT: number = 500;

  private http= inject(HttpClient);

  constructor() { }

    getGames(): Observable<Game[]> {
      const body = `fields name,cover.image_id,platforms.name, genres.name; where themes != (42) & category = 0 & (platforms = (48,167)); limit ${this.LIMIT};`;
      const headers = new HttpHeaders({
        'Client-ID': environment.apiKey,
        'Authorization': environment.apiToken,
        'Accept': 'application/json',
        
      });
      return this.http.post<Game[]>(this.baseUrl, body, { headers : headers });
    }

    getGenres(): Observable<any> {
      const body = `fields name; limit ${this.LIMIT};`;
      const headers = new HttpHeaders({
        'Client-ID': environment.apiKey,
        'Authorization': environment.apiToken,
        'Accept': 'application/json',
      });
  
      return this.http.post<any>('/genres', body, { headers : headers });
    }

    getPlatforms(): Observable<any> {
      const body = `fields name; where id = (48, 167,6,169,49,130);`;
      const headers = new HttpHeaders({
        'Client-ID': environment.apiKey,
        'Authorization': environment.apiToken,
        'Accept': 'application/json',
      });
  
      return this.http.post<any>('/platforms', body, { headers : headers });
    }
  
    getGameByName(name: string): Observable<Game[]> {
      const queryParams = `fields name, summary, cover.image_id; where name = "${name}"; limit 1;`;
      const   headers = new HttpHeaders({
        'Client-ID': environment.apiKey,
        'Authorization': environment.apiToken,
        'Accept': 'application/json'
      });
      return this.http.post<Game[]>(this.baseUrl, queryParams, { headers });
    }
}
