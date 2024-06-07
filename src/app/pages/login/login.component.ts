import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

type loginForm = {
  email : string;
  password:string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CustomButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
btnText = 'Connexion';

newUser: loginForm = {
  email: "",
  password: "",
}
}
