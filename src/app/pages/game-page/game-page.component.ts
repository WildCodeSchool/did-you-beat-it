import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomepageBannerComponent } from '../../components/homepage-banner/homepage-banner.component';
import { Game } from '../../models/games-mock';
import { GamesApiService } from '../../models/games-api.service';
import { NgFor, NgIf } from '@angular/common';
import { GameRecommendationComponent } from '../../components/game-recommendation/game-recommendation.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [HomepageBannerComponent, RouterLink, NgFor, NgIf, GameRecommendationComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  
  game?: Game;
  
  private gamesApiService = inject(GamesApiService);
  
  ngOnInit() : void {
    this.gamesApiService.getGamesInfos().subscribe(GamesFromJSON => {
      this.game = GamesFromJSON;
    })
  }
}
