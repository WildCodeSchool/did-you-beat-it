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

  private localStorageService = inject(LocalStorageService);
  slug!:string|null;

  isConnected: boolean = true;
  isAdmin: boolean = true;
  
  ngOnInit():void {
    this.slug = this.localStorageService.getValue("slug")
    this.localStorageService.watchStorage().subscribe((data: string) => {
      this.slug = data
    })
  }

  closeMenu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  }
}
