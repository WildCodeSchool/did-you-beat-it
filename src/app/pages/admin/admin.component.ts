import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  activateLink(event: Event): void {
    event.preventDefault();

    // Supprime la classe active de tous les liens
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.classList.remove('active');
    });

    // Ajoute la classe active au lien cliqué
    const target = event.target as HTMLElement;
    target.classList.add('active');
  }
}
