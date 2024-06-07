import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AproposComponent } from './pages/apropos/apropos.component';



export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'connexion',
    component: LoginComponent ,
  },
  {
    path: 'inscription',
    component: SignupComponent,
  },
  {
    path:'cgu',
    component: CguComponent,
  },
  {
    path:'contact',
    component: ContactComponent,
  },
 {
    path:'apropos',
    component: AproposComponent,
  },
];
