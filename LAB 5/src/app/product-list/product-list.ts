import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input.required<Product[]>();

  onProductRemove(productId: number) {
    const currentProducts = this.products();
    const index = currentProducts.findIndex(p => p.id === productId);

    if (index !== -1) {
      currentProducts.splice(index, 1);
    }
  }
}
