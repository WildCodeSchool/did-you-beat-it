import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { EditInformationsComponent } from '../../components/edit-informations/edit-informations.component';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [RouterLink, RouterOutlet, EditInformationsComponent],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent {

}
