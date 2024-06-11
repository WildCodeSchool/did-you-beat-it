import { Component } from '@angular/core';
import { CardGameBigComponent } from '../card-game-big/card-game-big.component';

@Component({
  selector: 'app-game-recommendation',
  standalone: true,
  imports: [CardGameBigComponent],
  templateUrl: './game-recommendation.component.html',
  styleUrl: './game-recommendation.component.scss'
})
export class GameRecommendationComponent {

}
