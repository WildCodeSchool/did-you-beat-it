import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterVisible: boolean = true;

  toggleFilters() {
    this.filterVisible = !this.filterVisible;
  }

}
