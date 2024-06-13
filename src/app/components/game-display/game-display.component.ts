import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';
import { CommonModule } from '@angular/common';
import { game } from '../../models/game';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-game-display',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './game-display.component.html',
  styleUrl: './game-display.component.scss'
})
export class GameDisplayComponent {
  games:game[]=[];
  filteredGames: game[] = [];
  years: number[] = [];
  selectedPlatform: string = "";
  selectedScore: string = "";
  selectedGenre: string = "";
  selectedYear: string = "";
  private gameService= inject(GameService);

  applyFilters() {
    this.filteredGames = this.games.filter(game => {
      const matchesPlatform = this.selectedPlatform ? game.platforme === this.selectedPlatform : true;
      const matchesScore = this.selectedScore ? String(game.score) === this.selectedScore : true;
      const matchesGenre = this.selectedGenre ? game.genre === this.selectedGenre : true;
      const matchesYear = this.selectedYear ? String(game.year) === this.selectedYear : true;
      return matchesPlatform && matchesScore && matchesGenre && matchesYear;
    });
  }

  /*onPlatformChange(){
    if(this.selectedPlatform ===""){
      this.filtredGames=this.games
    }
    else{
      this.filtredGames=this.games.filter((item:game) => {
        return item.platforme===this.selectedPlatform
      })
    }
    
  }
  onScoreChange(){
    if(this.selectedScore===""){
      this.filtredGames=this.games
    }
    else{
      this.filtredGames=this.games.filter((item:game) => {
        return String(item.score)===this.selectedScore
      })
      console.log(this.filtredGames)
    }
  }*/
  ngOnInit(): void {
    this.gameService.getGames().subscribe(x=>{
      this.filteredGames = this.games = x
  
    });

    //1950 -> 2023
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
   for ( let item =anneeActuelle;item>=1950;item--) {
      this.years.push(item);
    }

   }
  }