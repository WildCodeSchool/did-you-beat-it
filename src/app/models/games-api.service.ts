import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(private http: HttpClient) { }

  getGamesInfos(): Observable<any> {
    return this.http.get('../../data/gamePageModel.json')
  }
}
