export interface Tour {
  id: string;
  title: string;
  location?: string;
  duration?: string;
  price?: number;
  imageUrl: string;
  description: string;
  type?: 'Half Day' | 'Full Day';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Deal {
  id: string;
  title: string;
  destination: string;
  originalPrice: number;
  discountedPrice: number;
  deadline: string;
  imageUrl: string;
  description: string;
  tags: string[];
}
