import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HomepageBannerComponent } from '../../components/homepage-banner/homepage-banner.component';

import { GlobalRecommendationComponent } from '../../components/globalRecommendation/global-recommendation/global-recommendation.component';
import { LastGameHomeComponent } from '../../components/last-game-home/last-game-home.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomepageBannerComponent, GlobalRecommendationComponent, LastGameHomeComponent, CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  isConnected(){
    return !true;
  }

  textButton = 'Découvrir les jeux';
}
