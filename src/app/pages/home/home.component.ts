import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomepageBannerComponent } from '../../homepage-banner/homepage-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomepageBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
