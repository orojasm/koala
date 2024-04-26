import { Routes } from '@angular/router';
import HomeComponent from '@pages/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('@auth/auth.routing').then(m => m.AUTH_ROUTES)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
