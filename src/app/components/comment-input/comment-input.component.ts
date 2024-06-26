import { Component } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CommentService } from '../../services/comments/comment.service';

@Component({
  selector: 'app-comment-input',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './comment-input.component.html',
  styleUrl: './comment-input.component.scss'
})
export class CommentInputComponent {
  btnText = 'Envoyer';
}
