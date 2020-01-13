import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Cart} from '../models/cart';
import {ProductCart} from '../models/product-cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  amount: number;

  carts: Cart = null;

  constructor(private shoppingCart: ShoppingCartService) {

    this.amount = 0;
    /*
        this.orderFinished = false;
    */
  }

  ngOnInit() {
    this.getCart();
  }

  // call service to get cart
  getCart() {
    this.shoppingCart.getCarts().subscribe((carts: any) => {
      this.carts = carts;
      console.log(carts);
      this.amount = this.calculateAmount(this.carts.productsList);
      console.log(this.amount);
    });
  }

  // call service to send cart data to order in backend.
  sendCartToOrder() {
    this.shoppingCart.sendToOrderBackend(this.amount).subscribe(x => console.log('amount to order: ' + x));
  }

  private calculateAmount(products: ProductCart[]): number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.price * value.quantity);
    });
    return sum;
  }

  reset() {
    this.amount = 0;
  }

  ngOnDestroy(): void {
  }
}
