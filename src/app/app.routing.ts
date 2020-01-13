import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AppComponent} from './app.component';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {OrdersComponent} from './orders/orders.component';

const APP_ROUTES: Routes = [
  {path: 'appcomponent', component: AppComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'order', component: OrdersComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
