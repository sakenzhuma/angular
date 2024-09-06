import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AuthComponent } from '../views/auth/auth.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthComponent }
];
