import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private localStorage = inject(LocalStorageService);
  slug!:string|null;

  isConnected: boolean = true;
  isAdmin: boolean = true;
  
  ngOnInit():void {
    this.slug = this.localStorage.getValue("slug")
  }

  closeMenu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  }
}
