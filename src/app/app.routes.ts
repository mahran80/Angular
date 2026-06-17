import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { Login } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { guestGuard } from './core/guest.guard';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  // Protected routes: Only logged-in users can access products and search
  { path: 'products', component: ProductComponent, canActivate: [authGuard] },
  { path: 'search-products', component: SearchProductsComponent, canActivate: [authGuard] },
  
  // Guest routes: Blocked if the user is already logged in
  { path: 'login', component: Login, canActivate: [guestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [guestGuard] },
  
  { path: 'dashbord/profile', component: HomeComponent }, 
  { path: '**', component: NotFoundComponent }
];