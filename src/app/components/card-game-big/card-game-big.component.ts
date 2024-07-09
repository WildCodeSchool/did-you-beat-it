import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Game } from '../../models/game';


@Component({
  selector: 'app-card-game-big',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-game-big.component.html',
  styleUrl: './card-game-big.component.scss'
})
export class CardGameBigComponent {
  games : Game[] = [];
  gameDefaultCover = '../../../assets/pictures/default_cover.png'
  
  @Input() gameName?: string = 'Jeu recommandé';
  @Input() gameCover?: string = '../../../assets/pictures/default_cover.png';
  @Input() gameGenre?: string = 'Genre';
}
