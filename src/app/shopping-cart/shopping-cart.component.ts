import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductOrders} from '../models/product-orders.model';
import {ProductOrder} from '../models/product-order.model';
import {Subscription} from 'rxjs/internal/Subscription';
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
  orderFinished: boolean;
  orders: ProductOrders;
  total: number;
  sub: Subscription;

  // @Output() onOrderFinished: EventEmitter<boolean>;

  product: Product = {} as Product;
  @Input() cart: Cart;
  carts: Cart = null;
  products: Product[] = [];
  prodCaught: ProductCart = {} as ProductCart;
  productsList: ProductCart[] = [];

  constructor(private shoppingCart: ShoppingCartService) {
/*
    this.total = 0;
    this.orderFinished = false;
    this.onOrderFinished = new EventEmitter<boolean>();
*/
  }

  ngOnInit() {
    this.getCart();
    this.orders = new ProductOrders();
    // this.products = service.getCenas();
    // this.loadCart();
    // this.loadTotal();
  }

  // Chama o serviço para obter todos os produto
  getCart() {
    this.shoppingCart.getCarts().subscribe((carts: any) => {
      this.carts = carts;
    });
  }

  private calculateTotal(products: ProductOrder[]): number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.product.price * value.quantity);
    });
    return sum;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // finishOrder() {
  //    this.orderFinished = true;
  //    this.productService.Total = this.total;
  //    this.onOrderFinished.emit(this.orderFinished);
  // }

  // loadTotal() {
  //    this.sub = this.productService.OrdersChanged.subscribe(() => {
  //        this.total = this.calculateTotal(this.orders.productOrders);
  //    });
  // }

  // loadCart() {
  //    this.sub = this.productService.ProductOrderChanged.subscribe(() => {
  //        let productOrder = this.productService.SelectedProductOrder;
  //        if (productOrder) {
  //            this.orders.productOrders.push(new ProductOrder(
  //                productOrder.product, productOrder.quantity));
  //        }
  //        this.productService.ProductOrders = this.orders;
  //        this.orders = this.productService.ProductOrders;
  //        this.total = this.calculateTotal(this.orders.productOrders);
  //    });
  // }

  reset() {
    this.orderFinished = false;
    this.orders = new ProductOrders();
    this.orders.productOrders = [];
    //   this.loadTotal();
    this.total = 0;
  }
}
