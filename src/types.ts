export interface Product {
  id: string;
  name: string;
  category: 'bestseller' | 'accessories' | 'bags' | 'mens' | 'womens' | 'cricket' | 'kids' | 'headwear';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  description: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  image: string;
  secondaryImage?: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  features?: string[];
  techSpecs?: Record<string, string>;
  images?:string[];
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productPurchased: string;
  avatarImage?: string;
  isVerified: boolean;
  location?: string;
}
