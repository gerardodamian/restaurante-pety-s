export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
  deliveryMethod: 'pickup' | 'delivery';
  paymentMethod: 'transfer' | 'cash';
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  whatsappNumber: string;
  hours: {
    [key: string]: string;
  };
  location: {
    lat: number;
    lng: number;
  };
}
