import {Component, OnInit} from '@angular/core';
import {ProductOrders} from "../models/product-orders.model";
import {Subscription} from "rxjs/internal/Subscription";
import {ProductService} from "../services/product.service";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    orders: ProductOrders;
    total: number;
    paid: boolean;
    sub: Subscription;

    constructor(private productService: ProductService) {
       // this.orders = this.productService.ProductOrders;
    }

    ngOnInit() {
        this.paid = false;
       /* this.sub = this.productService.OrdersChanged.subscribe(() => {
            this.orders = this.productService.ProductOrders;
        });
        this.loadTotal();
    }

    pay() {
        this.paid = true;
        this.productService.saveOrder(this.orders).subscribe();
    }

    loadTotal() {
        this.sub = this.productService.TotalChanged.subscribe(() => {
            this.total = this.productService.Total;
        });*/
    }
}
