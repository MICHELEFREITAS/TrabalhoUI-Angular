import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  product: Product = {} as Product;
  products: Product[] = [];
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  // define se um produto será criado ou atualizado
  saveProduct(form: NgForm) {
    if (this.product.id !== undefined) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.productService.saveProduct(this.product).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }


  // copia o produto para ser enviado ao carrinho.
  sendToCart() {
    // this.productService.sendCartToBackend(this.selectedProducts).subscribe(x => console.log(x));
  }

  // copia o produto para ser enviado ao carrinho.
  selectProduct(productSelected: Product) {
    this.selectedProducts.push(productSelected);
    console.log('Product selected is: ' + JSON.stringify(productSelected));
  }

  // Chama o serviço para obter todos os produto
  getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  // deleta um produto
  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.getProducts();
    });
  }

  // copia o produto para ser editado
  editProduct(product: Product) {
    this.product = {...product};
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getProducts();
    form.resetForm();
    this.product = {} as Product;
  }
}
