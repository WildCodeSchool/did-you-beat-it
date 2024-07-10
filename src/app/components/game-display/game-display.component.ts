import { Component, inject } from '@angular/core';
import { GameService } from '../../services/gameService/game.service';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpErrorResponse } from '@angular/common/http';
=======
import { PaginationComponent } from '../pagination/pagination.component';
>>>>>>> f07b586190cc4c629b8d0160d45978b5ddb63f27
@Component({
    selector: 'app-game-display',
    standalone: true,
    templateUrl: './game-display.component.html',
    styleUrl: './game-display.component.scss',
    imports: [CommonModule, RouterLink, FormsModule, PaginationComponent]
})
export class GameDisplayComponent {
  games:Game[]=[];
  filteredGames: Game[] = [];
  genres: string[] = [];
  platforms: string[] = [];
  years: number[] = [];
  selectedPlatform: string = "";
  selectedScore: string = "";
  selectedGenre: string = "";
  selectedYear: string = "";
  inputName:string ="";
<<<<<<< HEAD
  errorMessage : string = ""; 
=======
  elementsPerPage: number = 12;
  totalPages: number = Math.ceil(this.games.length / this.elementsPerPage);
  currentPage: number = 1;
>>>>>>> f07b586190cc4c629b8d0160d45978b5ddb63f27
  private gameService= inject(GameService);
  gameDefaultCover = '../../../assets/pictures/default_cover.png';


  applyFilters() {
    this.filteredGames = this.games.filter(game => {
      const matchesPlatform = this.selectedPlatform ? game.platform?.includes(this.selectedPlatform) : true;
      const matchesScore = this.selectedScore ? String(game.rating) === this.selectedScore : true;
      const matchesGenre = this.selectedGenre ? game.genre?.includes(this.selectedGenre) : true;
      const matchesYear = this.selectedYear ? String(game.year) === this.selectedYear : true;
      const matchesName= this.inputName ? String(game.name).toLowerCase().includes(this.inputName.toLowerCase()) : true;
      return matchesPlatform && matchesScore && matchesGenre && matchesYear && matchesName;
    });
  }
  ngOnInit(): void {
    this.loadGames();

    this.loadGenres();
    this.loadPlatforms();
 
    const CurrentDate = new Date();
    const CurrentYear = CurrentDate.getFullYear();
   for ( let item =CurrentYear;item>=1950;item--) {
      this.years.push(item);
    }

   }

   loadGames(): void {
    this.gameService.getGames().subscribe(
      (data: any[]) => {
    this.games = data.map(gameData => {
      const id = gameData.id;
      const name = gameData.name;
      const cover_id =  this.gameService.getCoverUrl(gameData.cover?.image_id);
      const genres_name = gameData.genres?.map((genre: any) => genre.name) || [];
      const platforms_name = gameData.platforms?.map((platform: any) => platform.name) || [];
      return new Game(id, name, cover_id, genres_name, platforms_name);
    });
<<<<<<< HEAD
    this.filteredGames = this.games; 
  }, (error: HttpErrorResponse) => {
    this.errorMessage = 'Échec du chargement des jeux'; 
  }
)
=======
    this.displayGames(this.currentPage);
  })
>>>>>>> f07b586190cc4c629b8d0160d45978b5ddb63f27
}

loadGenres() {
  this.gameService.getGenres().subscribe(
    (genres: any[]) => {
      this.genres = genres.map(genre => genre.name);
    }, (error: HttpErrorResponse) => {
      this.errorMessage = 'Échec du chargement des genres de jeux'; 
    }
  );
}  

loadPlatforms() {
  this.gameService.getPlatforms().subscribe(
    (plateform: any[]) => {
      this.platforms = plateform.map(plateform => plateform.name);
<<<<<<< HEAD

    }, (error: HttpErrorResponse) => {
      this.errorMessage = 'Échec du chargement des platformes'; 
    }
=======
    },
>>>>>>> f07b586190cc4c629b8d0160d45978b5ddb63f27
  );
}  



onPageChange(page: number) {
  this.currentPage = page;
  this.displayGames(page);
}

displayGames(page: number) {
  const startIndex = (page - 1) * this.elementsPerPage;
    const endIndex = page * this.elementsPerPage;
    this.filteredGames = this.games.slice(startIndex, endIndex);
}
}