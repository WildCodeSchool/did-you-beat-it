import { Component, inject, Input, OnInit } from '@angular/core';
import { CardGameBigComponent } from '../card-game-big/card-game-big.component';
import { RouterLink } from '@angular/router';
import { Game } from '../../models/game';
import { GameService } from '../../services/gameService/game.service';

@Component({
  selector: 'app-game-recommendation',
  standalone: true,
  imports: [CardGameBigComponent],
  templateUrl: './game-recommendation.component.html',
  styleUrl: './game-recommendation.component.scss'
})
export class GameRecommendationComponent implements OnInit {
  @Input() genre!: string;
  games: Game[] = [];

  private gameService = inject(GameService);
  ngOnInit(): void {
    this.getRecommandatedGames(this.genre);
  }


  getRecommandatedGames(genre: string){
    this.gameService.getGameBySameGenre().subscribe({
      next:(data: any[]) => {
        this.games = data.map(gameData => {
          const id = gameData.id;
          const name = gameData.name;
          const cover_id = this.gameService.getCoverUrl(gameData.cover?.image_id);
          const genres_name = this.gameService.getGenreNames(gameData.genres?.map((genre: any) => genre.name) || []);
          const artworks_id = gameData.artworks?.map((artwork: any) => artwork.image_id);
          const recommendedGames = gameData.filter(gameData => gameData.genre === this.genre)
          return new Game(id, name, cover_id, genres_name, artworks_id);
        })
      }
    })
  }

}
