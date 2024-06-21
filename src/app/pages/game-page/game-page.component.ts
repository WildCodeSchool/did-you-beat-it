import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomepageBannerComponent } from '../../components/homepage-banner/homepage-banner.component';
import { Game } from '../../models/games-mock';
import { GamesApiService } from '../../models/games-api.service';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { GameRecommendationComponent } from '../../components/game-recommendation/game-recommendation.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [HomepageBannerComponent, RouterLink, NgFor, NgIf, GameRecommendationComponent, RatingComponent, NgStyle, CustomButtonComponent],
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

  modalOpen = false;
  modalImage = '';

  openModal(image: string) {
    this.modalOpen = true;
    this.modalImage = image;
  }

  closeModal() {
    this.modalOpen = false;
  }

  isConnected(){
    return true;
  }

  btnText = 'Terminé ?';
  class = 'game__infos--btn';
}
