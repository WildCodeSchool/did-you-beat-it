import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomepageBannerComponent } from '../../components/homepage-banner/homepage-banner.component';
import { Game } from '../../models/games-mock';
import { GamesApiService } from '../../services/games-api.service';
import { Character } from '../../models/character';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { GameRecommendationComponent } from '../../components/game-recommendation/game-recommendation.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { GameVoteComponent } from '../../components/game-vote/game-vote.component';


@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [HomepageBannerComponent, RouterLink, NgFor, NgIf, GameRecommendationComponent, RatingComponent, NgStyle, CustomButtonComponent, GameVoteComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  
  game?: Game;
  characters?: Character[];
  modalOpen = false;
  modalImage = '';
  btnText = 'Terminé ?';
  class = 'game__infos--btn';
  isGameAdded: boolean = false;
  isGameFinished: boolean = false;
  
  private gamesApiService = inject(GamesApiService);
  
  ngOnInit() : void {
    this.gamesApiService.getGamesInfos().subscribe(GamesFromJSON => {
      this.game = GamesFromJSON;
    })
  }

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

  addGame(){
    this.isGameAdded = !this.isGameAdded;
  }

  finishGame(){
    this.isGameFinished = !this.isGameFinished;
    this.btnText = this.isGameFinished ? 'Terminé !' : 'Terminé ?';
  }

  get platformsForVoting() {
    return this.game?.platform?.map(p => ({display: p})) || [];
  }
}
