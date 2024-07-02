import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { EditInformationsComponent } from '../../components/edit-informations/edit-informations.component';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';


@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, EditInformationsComponent],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent {

  private localStorage = inject(LocalStorageService)
  slug!:string|null;

  ngOnInit():void {
    this.slug = this.localStorage.getValue("slug")
  }


}
