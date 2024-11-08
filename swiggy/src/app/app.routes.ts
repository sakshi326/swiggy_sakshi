import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate:[AuthGuard] },
  { path: 'cart', component: CartComponent,canActivate:[AuthGuard]  },
  { path: 'login', component: LoginComponent },
  {path:'order', component: OrderComponent, canActivate:[AuthGuard] },
  { path: '**', redirectTo: '/home' }, 
];

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppRoutingComponent {}
