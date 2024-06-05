import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomepageBannerComponent } from '../../homepage-banner/homepage-banner.component';
import { LastGameHomeComponent } from '../../last-game-home/last-game-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomepageBannerComponent, LastGameHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  isConnected() {
    return true;
  }
}
