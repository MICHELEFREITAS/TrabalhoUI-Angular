import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';


import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    OrdersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
