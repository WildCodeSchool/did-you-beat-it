import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-nav.component.html',
  styleUrl: './tab-nav.component.scss'
})
export class TabNavComponent {
  
  currentSection: string = 'liste-des-jeux';

  showSection(section: string) {
    this.currentSection = section;
  }


}
