import { Routes } from '@angular/router';
import HomeComponent from '@pages/home/home.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { SimpleLayoutComponent } from '@shared/components/layout/simple-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    loadChildren: () => import('@auth/auth.routing').then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ],
    pathMatch: 'prefix',
  },
];
