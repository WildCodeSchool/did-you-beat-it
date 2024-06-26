import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardGameSmallComponent } from '../cardGameSmall/card-game-small/card-game-small.component';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-tab-nav',
  standalone: true,
  imports: [CommonModule, FilterComponent, CardGameSmallComponent],
  templateUrl: './tab-nav.component.html',
  styleUrl: './tab-nav.component.scss'
})
export class TabNavComponent {
  
  currentSection: string = 'liste-des-jeux';

  showSection(section: string) {
    this.currentSection = section;
  }


}
