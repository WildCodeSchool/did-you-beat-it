import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalRecommendationComponent } from '../../components/globalRecommendation/global-recommendation/global-recommendation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GlobalRecommendationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
