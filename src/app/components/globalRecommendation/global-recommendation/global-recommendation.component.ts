import { Component } from '@angular/core';
import { CardGameSmallComponent } from '../../cardGameSmall/card-game-small/card-game-small.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-global-recommendation',
  standalone: true,
  imports: [CardGameSmallComponent, RouterLink],
  templateUrl: './global-recommendation.component.html',
  styleUrl: './global-recommendation.component.scss'
})
export class GlobalRecommendationComponent {

}
