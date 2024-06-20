import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input()
  rating: any;
  maxRating = 5;
  filledStars: number = 0;
  emptyStars: number = 0;

  ngOnChanges() {
    this.filledStars = Math.round(this.rating);
    this.emptyStars = this.maxRating - this.filledStars;
  }

  stars: number[] = Array.from({length: this.maxRating}, (_, i) => i + 1); 
}
