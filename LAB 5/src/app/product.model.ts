export interface Product {
  id: number;
  categoryId: number; // Привязка к категории
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  likes: number; // Счетчик лайков по заданию
}
