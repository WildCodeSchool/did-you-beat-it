import { Component } from '@angular/core';
import { CardGameSmallComponent } from '../../cardGameSmall/card-game-small/card-game-small.component';

@Component({
  selector: 'app-global-recommendation',
  standalone: true,
  imports: [CardGameSmallComponent],
  templateUrl: './global-recommendation.component.html',
  styleUrl: './global-recommendation.component.scss'
})
export class GlobalRecommendationComponent {

}
