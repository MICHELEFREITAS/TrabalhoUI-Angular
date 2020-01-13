import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {Order} from '../models/order';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  total: number;
  paid: boolean;

  order: Order = {} as Order;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.getOrder();
    this.paid = false;

    /*  pay() {
       this.paid = true;
       this.productService.saveOrder(this.orders).subscribe();
   }
  */
  }

  // call service to get cart
  getOrder() {
    this.orderService.getOrder().subscribe((order: any) => {
      this.order = order;
      console.log(this.order);
    });
  }

}
