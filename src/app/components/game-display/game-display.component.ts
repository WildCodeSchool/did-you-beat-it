import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';
import { CommonModule } from '@angular/common';
import { game } from '../../models/game';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-game-display',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './game-display.component.html',
  styleUrl: './game-display.component.scss'
})
export class GameDisplayComponent {
  games:game[]=[];
  years:number[]=[];
  private gameService= inject(GameService);

  ngOnInit(): void {
    this.gameService.getGames().subscribe(x=>{this.games=x});
    //1950 -> 2023
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
   for ( let item =anneeActuelle;item>=1950;item--) {
      this.years.push(item);
    }

   }
  }