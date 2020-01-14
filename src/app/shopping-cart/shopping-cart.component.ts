import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Cart} from '../models/cart';
import {ProductCart} from '../models/product-cart.model';
import {CartToOrder} from '../models/cart-to-order';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  carts: Cart = null;
  private cartToOrder: CartToOrder;

  constructor(private shoppingCart: ShoppingCartService) {

    this.reset();
  }

  ngOnInit() {
    this.getCart();
  }

  // call service to get cart
  getCart() {
    this.shoppingCart.getCarts().subscribe((carts: any) => {
      this.carts = carts;
      console.log(carts);
      this.cartToOrder = {amount: (this.calculateAmount(this.carts.productsList))};
      console.log(this.cartToOrder);
    });
  }

  // call service to send cart data to order in backend.
  sendCartToOrder() {
    this.shoppingCart.sendToOrderBackend(this.cartToOrder).subscribe(x => console.log('amount to order: ' + x));
  }

  private calculateAmount(products: ProductCart[]): number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.price * value.quantity);
    });
    return sum;
  }

  reset() {
    this.cartToOrder = {amount: 0};
  }

  ngOnDestroy(): void {
  }
}
