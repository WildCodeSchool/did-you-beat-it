import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-admin-comments',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './admin-comments.component.html',
  styleUrl: './admin-comments.component.scss'
})
export class AdminCommentsComponent {

}
