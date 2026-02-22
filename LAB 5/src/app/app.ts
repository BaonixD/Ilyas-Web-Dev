import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Category } from './category-model';
import { Product } from './product.model';
import { CATEGORIES, PRODUCTS } from './data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;

  // Переменные для хранения текущего состояния
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  // Функция, которая срабатывает при клике на категорию
  selectCategory(category: Category) {
    this.selectedCategory = category;
    // Берем все товары и оставляем только те, чей categoryId совпадает с выбранным
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === category.id);
  }
}


