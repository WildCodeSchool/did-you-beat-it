import { Component } from '@angular/core';
import { HomepageBannerComponent } from '../../components/homepage-banner/homepage-banner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [HomepageBannerComponent, RouterLink],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {

}
