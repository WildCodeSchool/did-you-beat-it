import { Component } from '@angular/core';
import { CardGameSmallComponent } from '../cardGameSmall/card-game-small/card-game-small.component';

@Component({
  selector: 'app-last-game-home',
  standalone: true,
  imports: [CardGameSmallComponent],
  templateUrl: './last-game-home.component.html',
  styleUrl: './last-game-home.component.scss'
})
export class LastGameHomeComponent {

}
