import { Component, inject } from '@angular/core';
import { CardGameSmallComponent } from '../../cardGameSmall/card-game-small/card-game-small.component';
import { RouterLink } from '@angular/router';
import { Game } from '../../../models/game';
import { GameService } from '../../../services/gameService/game.service';

@Component({
  selector: 'app-global-recommendation',
  standalone: true,
  imports: [CardGameSmallComponent, RouterLink],
  templateUrl: './global-recommendation.component.html',
  styleUrl: './global-recommendation.component.scss'
})
export class GlobalRecommendationComponent {
  games: Game[] = [];
  gameDefaultCover = '../../../assets/pictures/default_cover.png'

  private gameService = inject(GameService)
  ngOnInit(): void {
    this.getNewGames();

  }
  getNewGames() {
    this.gameService.getUpcomingGames().subscribe({
      next: (data: any[]) => {
        this.games = data.map(gameData => {
          const id = gameData.game?.id;
          const name = gameData.game?.name;
          const cover_id =  this.gameService.getCoverUrl(gameData.cover?.image_id);
          const summary = gameData.summary;
          const genres_name = this.gameService.getGenreNames(gameData.genres?.map((genre: any) => genre.name) || []);
          const platforms_name = gameData.platforms?.map((platform: any) => platform.name) || [];
          const artworks_id = gameData.artworks?.map((artwork: any) => artwork.image_id);
          const screenshots_id = gameData.screenshots?.map((screenshot: any) => screenshot.image_id);
          const date = this.gameService.formatReleaseDate(gameData.first_release_date);
          return new Game(id, name, cover_id, genres_name, platforms_name, summary, artworks_id, screenshots_id, date);
        })
      }
    })

  }

  

 
}
