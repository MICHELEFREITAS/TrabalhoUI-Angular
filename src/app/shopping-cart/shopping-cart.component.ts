import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {ProductOrder} from "../models/product-order.model";
import {ProductService} from "../services/product.service";
import {Subscription} from "rxjs/internal/Subscription";

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

    @Output() onOrderFinished: EventEmitter<boolean>;

    constructor(private productService: ProductService) {
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new EventEmitter<boolean>();
    }

    ngOnInit() {
        this.orders = new ProductOrders();
        //this.loadCart();
        //this.loadTotal();
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

    //finishOrder() {
    //    this.orderFinished = true;
    //    this.productService.Total = this.total;
    //    this.onOrderFinished.emit(this.orderFinished);
    //}

    //loadTotal() {
    //    this.sub = this.productService.OrdersChanged.subscribe(() => {
    //        this.total = this.calculateTotal(this.orders.productOrders);
    //    });
    //}

    //loadCart() {
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
    //}

    reset() {
        this.orderFinished = false;
        this.orders = new ProductOrders();
        this.orders.productOrders = []
     //   this.loadTotal();
        this.total = 0;
    }
}
