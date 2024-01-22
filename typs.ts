export interface ProductT {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type ProductsResponseT = {
  products: ProductT[];
  total: number;
  skip: number;
  limit: number;
};

export interface FullProductT extends ProductT {
  quantity: number;
}
