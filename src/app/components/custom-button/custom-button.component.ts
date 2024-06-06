import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() text : string = '';
  @Input() btnType : string = '';
  @Input() class: string | undefined;
  @Input() conditionalClass?: string;
  @Input() onClick?: () => any;

  handleClick() {
    if(this.onClick) {
      this.onClick();
    }
  }
}
