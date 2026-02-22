import { Category } from './category-model';
import { Product } from './product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Техника Apple' },
  { id: 2, name: 'Мебель для дома' },
  { id: 3, name: 'Гейминг' },
  { id: 4, name: 'Спорт и Красота' }
];

export const PRODUCTS: Product[] = [
  // ================= КАТЕГОРИЯ 1: Техника Apple (Твои товары) =================
  {
    id: 1, categoryId: 1, likes: 0,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    description: 'Dynamic Island, новая камера 48 Мп и разъем USB-C. Стандарт надежности и стиля.',
    price: 385000, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/he3/h11/83559338442782.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h41/h63/83559338508318.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-113137790/'
  },
  {
    id: 2, categoryId: 1, likes: 0,
    name: 'Наушники Apple AirPods Pro 2 with Type-C',
    description: 'Улучшенное активное шумоподавление и адаптивный звук для полного погружения.',
    price: 115000, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83860651311134.jpg'],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000'
  },
  {
    id: 3, categoryId: 1, likes: 0,
    name: 'Ноутбук Apple MacBook Air 13 2025 13.3" / 16GB / SSD 512GB',
    description: 'Самый тонкий и легкий ноутбук Apple, полностью преображенный чипом M4.',
    price: 650000, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/p5a/37897269.jpeg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h6d/h1a/64373468561438.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-13-6-16-gb-ssd-256-gb-macos-mw0w3-138452161/?c=750000000'
  },
  {
    id: 4, categoryId: 1, likes: 0,
    name: 'Планшет Apple iPad Air 2022 Wi-Fi 10.9" 64GB синий',
    description: 'С чипом Apple M2, сверхбыстрой передачей данных и поддержкой Apple Pencil.',
    price: 356900, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h65/64434254020638.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000'
  },
  {
    id: 5, categoryId: 1, likes: 0,
    name: 'Смарт-часы Apple Watch Series 10 S/M 42 мм золотистый-белый',
    description: 'Более мощный чип, невероятно яркий дисплей и новая магия жестов.',
    price: 210000, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p45/p26/3345922.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h0a/h20/83860651311134.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-zolotistyi-belyi-128574070/?c=750000000'
  },

  // ================= КАТЕГОРИЯ 2: Мебель для дома =================
  {
    id: 6, categoryId: 2, likes: 0, // Твой товар
    name: 'Стол компьютерный Лофт, 110х70x75 см, белый',
    description: 'Стол прекрасно подойдет к любому интерьеру, т.к он универсален.',
    price: 20000, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h7c/85119645319198.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h7a/h3b/84451079520286.jpg'],
    link: 'https://kaspi.kz/shop/p/stol-komp-juternyi-loft-747-110h70x75-sm-belyi-108418941/?c=750000000'
  },
  {
    id: 7, categoryId: 2, likes: 0, // Твой товар
    name: 'Диван Morbido Комфорт, 210х80 см, серый',
    description: 'Практичный диван-кровать с легкой системой трансформации.',
    price: 50000, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/p92/88087136.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/h0c/63973562646558.jpg'],
    link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000'
  },
  {
    id: 8, categoryId: 2, likes: 0,
    name: 'Кресло компьютерное игровое',
    description: 'Эргономичное кресло с поддержкой спины для долгой работы и игр.',
    price: 45000, rating: 4.7,
    image: '', images: [], link: ''
  },
  {
    id: 9, categoryId: 2, likes: 0,
    name: 'Комод 4 ящика белый',
    description: 'Вместительный комод в минималистичном стиле.',
    price: 32000, rating: 4.6,
    image: '', images: [], link: ''
  },
  {
    id: 10, categoryId: 2, likes: 0,
    name: 'Кровать двуспальная 160х200 см',
    description: 'Стильная кровать с мягким изголовьем и подъемным механизмом.',
    price: 85000, rating: 4.8,
    image: '', images: [], link: ''
  },

  // ================= КАТЕГОРИЯ 3: Гейминг =================
  {
    id: 11, categoryId: 3, likes: 0, // Твой товар
    name: 'Игровая приставка Sony PlayStation 5 Slim',
    description: 'Новая, более компактная версия культовой консоли с 1 ТБ памяти.',
    price: 300000, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h02/h59/84548235132958.jpg'],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
  },
  {
    id: 12, categoryId: 3, likes: 0,
    name: 'Геймпад Sony DualSense',
    description: 'Беспроводной контроллер с тактильной отдачей для PS5.',
    price: 42000, rating: 4.9,
    image: '', images: [], link: ''
  },
  {
    id: 13, categoryId: 3, likes: 0,
    name: 'Игровые наушники Logitech G Pro X',
    description: 'Профессиональная гарнитура с технологией Blue VO!CE.',
    price: 78000, rating: 4.8,
    image: '', images: [], link: ''
  },
  {
    id: 14, categoryId: 3, likes: 0,
    name: 'Игровая мышь Razer DeathAdder V3',
    description: 'Ультралегкая киберспортивная мышь с топовым сенсором.',
    price: 35000, rating: 4.9,
    image: '', images: [], link: ''
  },
  {
    id: 15, categoryId: 3, likes: 0,
    name: 'Игровой монитор LG UltraGear 27"',
    description: 'Частота обновления 144 Гц и время отклика 1 мс.',
    price: 145000, rating: 4.8,
    image: '', images: [], link: ''
  },

  // ================= КАТЕГОРИЯ 4: Спорт и Красота =================
  {
    id: 16, categoryId: 4, likes: 0, // Твой товар
    name: 'Dyson Airwrap HS05 Long стайлер',
    description: 'Интеллектуальный контроль температуры для сохранения блеска волос.',
    price: 220000, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h6e/86037605646366.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h4f/h65/81223204306974.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-dorozhnym-chehlom-i-rascheskami-stailer-rozovyi-zolotoi-119489111/?c=750000000'
  },
  {
    id: 17, categoryId: 4, likes: 0, // Твой товар
    name: 'Maxler 100% Golden Micronized Creatine 600 г',
    description: 'Креатин для роста мышечной массы и увеличения выносливости.',
    price: 23000, rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/hba/85325002276894.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h6a/h87/83648165609502.jpg'],
    link: 'https://kaspi.kz/shop/p/maxler-100-golden-micronized-creatine-600-g-101423703/?c=750000000'
  },
  {
    id: 18, categoryId: 4, likes: 0,
    name: 'Сывороточный протеин Optimum Nutrition Gold Standard',
    description: 'Легендарный протеин для быстрого восстановления после тренировок.',
    price: 45000, rating: 4.9,
    image: '', images: [], link: ''
  },
  {
    id: 19, categoryId: 4, likes: 0,
    name: 'Массажер перкуссионный',
    description: 'Глубокий массаж мышц для расслабления и снятия напряжения.',
    price: 18000, rating: 4.6,
    image: '', images: [], link: ''
  },
  {
    id: 20, categoryId: 4, likes: 0,
    name: 'Умные весы Xiaomi Body Composition Scale 2',
    description: 'Точное измерение веса, процента жира, мышц и воды в организме.',
    price: 12000, rating: 4.8,
    image: '', images: [], link: ''
  }
];
