import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-game-small',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-game-small.component.html',
  styleUrl: './card-game-small.component.scss'
})
export class CardGameSmallComponent {
  @Input() gameName?: string = 'TITRE DU JEU TRES TRES LONG';
  @Input() gameCover?: string = './assets/pictures/rdoudou.jpeg';
  @Input() gameGenre?: string = 'Genre';
  @Input() release?: string  = 'Date de sortie'; 
}
