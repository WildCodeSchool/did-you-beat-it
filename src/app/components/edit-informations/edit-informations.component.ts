import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

type updateForm = {
  username:string;
  email:string;
  biography:string,
  password:string;
  confirmPassword:string;
  };

@Component({
  selector: 'app-edit-informations',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomButtonComponent],
  templateUrl: './edit-informations.component.html',
  styleUrl: './edit-informations.component.scss'
})
export class EditInformationsComponent {
  textButton = 'Sauvegarder';

  update : updateForm = {
    username : '',
    email : '',
    biography: '',
    password : '',
    confirmPassword : '',
  };

}
