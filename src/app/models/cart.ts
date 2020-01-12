import {ProductCart} from './product-cart.model';

export interface Cart {
  id: number;
  productsList: ProductCart[];
  date: string;

}
