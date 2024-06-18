import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterVisible: boolean = true;
  filters = {
    enCours: false,
    terminer: false,
    plateforme: '',
    genre: '',
    score: '',
    annee: ''
  };;

  toggleFilters() {
    this.filterVisible = !this.filterVisible;
  }
  resetFilters() {
    this.filters = {
      enCours: false,
      terminer: false,
      plateforme: '',
      genre: '',
      score: '',
      annee: ''
    };
  }

}
