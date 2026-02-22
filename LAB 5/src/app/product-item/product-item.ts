
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product } from '../product.model';
import { Component, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  // Принимаем 1 товар от родителя
  product = input.required<Product>();

  // Создаем "рупор" для отправки ID удаленного товара наверх
  @Output() remove = new EventEmitter<number>();

  // Локальная функция: увеличиваем лайки
  like() {
    this.product().likes += 1;
  }

  // Функция "Поделиться" из 4-й лабы
  share(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }

  // Сигнализируем родителю, что этот товар нужно удалить
  deleteItem() {
    this.remove.emit(this.product().id);
  }
}
