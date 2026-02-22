import { Component } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Dynamic Island, новая камера 48 Мп и разъем USB-C. Стандарт надежности и стиля.',
      price: 385000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/he3/h11/83559338442782.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h41/h63/83559338508318.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h04/83559338573854.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-113137790/'
    },
    {
      id: 2,
      name: 'Наушники Apple AirPods Pro 2 with Type-C',
      description: 'Улучшенное активное шумоподавление и адаптивный звук для полного погружения.',
      price: 115000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83860651311134.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h24/h13/83860651376670.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h7c/83860651442206.jpg'],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000'
    },
    {
      id: 3,
      name: 'Ноутбук Apple MacBook Air 13 2025 13.3" / 16GB / SSD 512GB',
      description: 'Самый тонкий и легкий ноутбук Apple, полностью преображенный чипом M4.',
      price: 650000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/p5a/37897269.jpeg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h6d/h1a/64373468561438.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h24/h13/83860651376670.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h7c/83860651442206.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-13-6-16-gb-ssd-256-gb-macos-mw0w3-138452161/?c=750000000'
    },
    {
      id: 4,
      name: 'Планшет Apple iPad Air 2022 Wi-Fi 10.9" 64GB синий',
      description: 'С чипом Apple M2, сверхбыстрой передачей данных и поддержкой Apple Pencil.',
      price: 356900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h65/64434254020638.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h9c/64434256871454.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h09/ha2/64434259492894.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000'
    },
    {
      id: 5,
      name: 'Смарт-часы Apple Watch Series 10 S/M 42 мм золотистый-белый',
      description: 'Более мощный чип, невероятно яркий дисплей и новая магия жестов.',
      price: 210000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/p26/3345922.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h0a/h20/83860651311134.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h24/h13/83860651376670.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h7c/83860651442206.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-zolotistyi-belyi-128574070/?c=750000000'
    },
    {
      id: 6,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Новая, более компактная версия культовой консоли с 1 ТБ памяти.',
      price: 300000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h02/h59/84548235132958.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h49/h44/84548235198494.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h88/h5b/84548235264030.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 7,
      name: 'Стол компьютерный Лофт, 110х70x75 см, белый',
      description: 'Стол прекрасно подойдет к любому интерьеру, т.к он универсален.',
      price: 20000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h7c/85119645319198.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h7a/h3b/84451079520286.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h54/h96/84451079585822.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h14/h9d/84451079651358.jpg'],
      link: 'https://kaspi.kz/shop/p/stol-komp-juternyi-loft-747-110h70x75-sm-belyi-108418941/?c=750000000'
    },
    {
      id: 8,
      name: 'Dyson Airwrap HS05 Long с дорожным чехлом и расческами стайлер розовый, золотой',
      description: 'Интеллектуальный контроль температуры для сохранения блеска волос.',
      price: 220000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h6e/86037605646366.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h4f/h65/81223204306974.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h84/h13/81223204372510.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h4c/81223204438046.jpg'],
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-dorozhnym-chehlom-i-rascheskami-stailer-rozovyi-zolotoi-119489111/?c=750000000'
    },
    {
      id: 9,
      name: 'Maxler 100% Golden Micronized Creatine 600 г',
      description: 'Каждый атлет знает о положительных эффектах креатина на рост мышечной массы и тренировочный процесс в целом: увеличение выносливости, рост объема мышц, положительное влияние на синтез белка, уменьшение боли в мышцах и восстановление после тренировок.',
      price: 23000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/hba/85325002276894.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h6a/h87/83648165609502.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h9d/83648165675038.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/ha1/h9c/83648165740574.jpg'],
      link: 'https://kaspi.kz/shop/p/maxler-100-golden-micronized-creatine-600-g-101423703/?c=750000000'
    },
    {
      id: 10,
      name: 'Диван Morbido Комфорт, 210х80 см, обивка микровелюр, серый',
      description: 'Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус.',
      price: 50000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/p92/88087136.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/h0c/63973562646558.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h4b/ha8/63973562712094.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/ha6/ha4/63973562777630.jpg'],
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000'
    }
  ];

  share(link: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(url, '_blank');
  }


}
