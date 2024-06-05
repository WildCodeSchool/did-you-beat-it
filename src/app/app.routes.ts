import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

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
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'inscription',
    component: SignUpComponent,
  },
];
