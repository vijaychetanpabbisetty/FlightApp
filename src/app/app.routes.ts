import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthScreenComponent } from './auth-screen/auth-screen.component';

export const routes: Routes = [
    { path: '', component: AuthScreenComponent },
    { path: 'home', component: HomeComponent },
];
