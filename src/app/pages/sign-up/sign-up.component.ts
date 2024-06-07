import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

type signUpForm = {
username:string;
email:string;
password:string;
confirmPassword:string;
};
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  textButton = 'S\'inscrire';
   signUp : signUpForm = {
    username : '',
    email : '',
    password : '',
    confirmPassword : '',
  };
}
