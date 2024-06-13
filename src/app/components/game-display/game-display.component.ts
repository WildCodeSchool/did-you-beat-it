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
  filtredGames:game[]=[];
  years:number[]=[];
  selectedPlatform:string="";
  selectedScore:string="";
  private gameService= inject(GameService);

  onPlatformChange(){
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
  }
  ngOnInit(): void {
    this.gameService.getGames().subscribe(x=>{
      this.filtredGames = this.games = x
  
    });

    //1950 -> 2023
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
   for ( let item =anneeActuelle;item>=1950;item--) {
      this.years.push(item);
    }

   }
  }