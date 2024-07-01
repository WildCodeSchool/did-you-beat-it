import { Component, inject } from '@angular/core';
import {ActivatedRoute, RouterLink } from '@angular/router';
import { HomepageBannerComponent } from '../../components/homepage-banner/homepage-banner.component';
import { Game } from '../../models/game';
import { GameService } from '../../services/gameService/game.service';
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
  
  games: Game[] = [];
  characters?: Character[];
  modalOpen = false;
  modalImage = '';
  defaultArtwork = '../../assets/banners/hades_banner.jpg';
  btnText = 'Terminé ?';
  class = 'game__infos--btn';
  isGameAdded: boolean = false;
  isGameFinished: boolean = false;
  btnform = 'Envoyer';
  
  private gameService = inject(GameService);
  private route = inject(ActivatedRoute);
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const name = params['name'];

      this.gameService.getGameByName(name).subscribe({
        next: (data: any[]) => {
          this.games = data.map(gameData => {
            const id = gameData.id;
            const cover_id = gameData.cover?.image_id;
            const name = gameData.name;
            const summary = gameData.summary;
            const genres_name = gameData.genres?.map((genre: any) => genre.name) || [];
            const platforms_name = gameData.platforms?.map((platform: any) => platform.name) || [];
            const artworks_id = gameData.artworks?.map((artwork: any) => artwork.image_id);
            const screenshots_id = gameData.screenshots?.map((screenshot: any) => screenshot.image_id);
            const involved_companies = gameData.involved_companies?.map((involvedCompany: any) => involvedCompany.company)
              ?.map((company: any) => company.name);
            const date = this.formatReleaseDate(gameData.first_release_date);

            console.log(gameData);
            return new Game(id, name, cover_id, genres_name, platforms_name, summary, artworks_id, screenshots_id, date, involved_companies);
          })
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    });
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

  toggleGamePossessed(){
    this.isGameAdded = !this.isGameAdded;
  }

  toggleGame(){
    this.isGameFinished = !this.isGameFinished;
    this.btnText = this.isGameFinished ? 'Terminé !' : 'Terminé ?';
  }

  // get platformsForVoting() {
  //   return this.game?.platform?.map(p => ({display: p})) || [];
  // }

  getCoverUrl(game: Game): string | undefined {
    return game.cover ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover}.jpg` : undefined;
  }

  getGenreNames(genres: any): string {
    if (!genres || !Array.isArray(genres) || genres.length === 0) {
      return 'No genre found';
    } else if (genres.length === 1) {
      return genres[0];
    } else {
      return genres.join(', ');
    }
  }

  getPlatformNames(platforms: string[] | undefined): string {
    if (!platforms || platforms.length === 0) {
      return 'No platforms found';
    } else if (platforms.length === 1) {
      return platforms[0];
    } else {
      return platforms.join(', ');
    }
  }

  getArtworkUrls(game: Game): string {
    if (!game.artworks) {
      return this.defaultArtwork;
    }
    if (game.artworks && game.artworks.length > 0) {
      return `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${game.artworks[0]}.jpg`;
    }
    else {
      return `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${game.artworks}.jpg`;
    }
  }

  getScreenshotUrls(game: Game): string[] {
    return game.screenshots?.map(screenshotId => `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${screenshotId}.jpg`) || [];
  }

  formatReleaseDate(timestamp: number): string {
    const date = new Date(timestamp * 1000); 
    return date.toLocaleDateString(); 
  }
}
