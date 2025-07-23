import type { MenuItem, RestaurantInfo, Review } from '../types';

export const restaurantInfo: RestaurantInfo = {
  name: "Pety´s Restaurant",
  address: "Calle Principal 123, Ciudad",
  phone: "+54 9 3517181975",
  whatsappNumber: "3517181975",
  hours: {
    "Lunes a Viernes": "11:00 - 22:00",
    "Sábado": "12:00 - 23:00",
    "Domingo": "12:00 - 21:00"
  },
  location: {
    lat: -33.4489,
    lng: -70.6693
  }
};

export const menuItems: MenuItem[] = [
    {
        id: "1",
        name: "Pizza Margherita",
        description:
            "Base de tomate, mozzarella fresca, albahaca y aceite de oliva",
        price: 12500,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop",
        category: "Pizzas",
    },
    {
        id: "2",
        name: "Hamburguesa Clásica",
        description:
            "Carne 180g, lechuga, tomate, cebolla, queso cheddar y papas fritas",
        price: 9500,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        category: "Sandwiches",
    },
    {
        id: "3",
        name: "Pasta Carbonara",
        description:
            "Fetuccini con salsa carbonara, panceta, huevo y queso parmesano",
        price: 11000,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
        category: "Pastas",
    },
    {
        id: "4",
        name: "Ensalada César",
        description:
            "Lechuga romana, pollo grillado, crutones, parmesano y aderezo césar",
        price: 8500,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        category: "Ensaladas",
    },
    {
        id: "5",
        name: "Salmón Grillado",
        description: "Filete de salmón con vegetales asados y salsa de hierbas",
        price: 15500,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        category: "Platos Principales",
    },
    {
        id: "6",
        name: "Tiramisú",
        description: "Clásico postre italiano con café, mascarpone y cacao",
        price: 4500,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
        category: "Postres",
    },
    {
        id: "7",
        name: "Pizza Pepperoni",
        description: "Base de tomate, mozzarella y abundante pepperoni",
        price: 13500,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
        category: "Pizzas",
    },
    {
        id: "8",
        name: "Risotto de Hongos",
        description: "Arroz arborio con hongos portobello, trufa y parmesano",
        price: 12000,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
        category: "Platos Principales",
    },
    {
        id: "9",
        name: "Coca Cola",
        description: "Bebida gaseosa clásica 350ml",
        price: 2500,
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
        category: "Bebidas",
    },
    {
        id: "10",
        name: "Jugo Natural de Naranja",
        description: "Jugo fresco de naranja recién exprimido 300ml",
        price: 3500,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
        category: "Bebidas",
    },
    {
        id: "11",
        name: "Agua Mineral",
        description: "Agua mineral sin gas 500ml",
        price: 1800,
        image: "https://jumboargentina.vtexassets.com/arquivos/ids/795828-800-600?v=638313501973800000&width=800&height=600&aspect=true",
        category: "Bebidas",
    },
    {
        id: "12",
        name: "Café Americano",
        description: "Café americano caliente recién preparado",
        price: 2800,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
        category: "Bebidas",
    },
    {
        id: "13",
        name: "Desayuno Completo",
        description:
            "Huevos revueltos, tocino, pan tostado, palta y jugo de naranja",
        price: 7500,
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
        category: "Desayunos",
    },
    {
        id: "14",
        name: "Pancakes con Miel",
        description:
            "Stack de 3 pancakes esponjosos con miel, mantequilla y frutos rojos",
        price: 6500,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
        category: "Desayunos",
    },
    {
        id: "15",
        name: "Tostadas Francesas",
        description:
            "Pan brioche bañado en huevo, canela y azúcar flor con jarabe de maple",
        price: 6000,
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
        category: "Desayunos",
    },
    {
        id: "16",
        name: "Avocado Toast",
        description:
            "Pan integral tostado con palta, tomate cherry, huevo poché y sésamo",
        price: 5500,
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
        category: "Desayunos",
    },
    {
        id: "17",
        name: "Yogurt con Granola",
        description:
            "Yogurt griego natural con granola casera, miel y frutas de temporada",
        price: 4500,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
        category: "Desayunos",
    },
];

export const featuredReviews: Review[] = [
  {
    id: "1",
    name: "María González",
    rating: 5,
    comment: "Excelente comida y atención. El ambiente es muy acogedor, perfecto para una cena romántica.",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Carlos Silva",
    rating: 5,
    comment: "Las pizzas están increíbles, la masa es perfecta. Definitivamente volveré con mi familia.",
    date: "2024-01-20"
  },
  {
    id: "3",
    name: "Ana López",
    rating: 4,
    comment: "Muy buena experiencia, la pasta carbonara estaba deliciosa. El servicio fue rápido y amable.",
    date: "2024-01-25"
  }
];

export const categories = [
  "Todas",
  "Desayunos",
  "Pizzas",
  "Sandwiches", 
  "Pastas",
  "Ensaladas",
  "Platos Principales",
  "Postres",
  "Bebidas"
];

export const weeklyOffers = [
  {
    id: "offer1",
    title: "🍕 PROMO PIZZA",
    subtitle: "2x1 en Pizzas Familiares",
    description: "Lleva 2 pizzas familiares al precio de 1. Válido de Lunes a Miércoles",
    discount: "50% OFF",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop",
    validUntil: "Válido hasta el Miércoles",
    bgColor: "linear-gradient(135deg, #ff6b35, #f7931e)",
    textColor: "white"
  },
  {
    id: "offer2",
    title: "🥞 DESAYUNO ESPECIAL",
    subtitle: "Combo Desayuno Completo",
    description: "Desayuno completo + café + jugo natural por solo $8.990",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=400&fit=crop",
    validUntil: "Válido hasta las 12:00",
    bgColor: "linear-gradient(135deg, #4facfe, #00f2fe)",
    textColor: "white"
  },
  {
    id: "offer3",
    title: "🍔 HAPPY HOUR",
    subtitle: "Hamburguesas + Bebida",
    description: "Todas las hamburguesas con bebida incluida. Solo de 18:00 a 20:00",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop",
    validUntil: "18:00 - 20:00 hrs",
    bgColor: "linear-gradient(135deg, #667eea, #764ba2)",
    textColor: "white"
  },
  {
    id: "offer4",
    title: "🍰 DULCE FIN DE SEMANA",
    subtitle: "Postres con 25% descuento",
    description: "Todos nuestros postres artesanales con descuento especial de fin de semana",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=400&fit=crop",
    validUntil: "Solo Sábados y Domingos",
    bgColor: "linear-gradient(135deg, #f093fb, #f5576c)",
    textColor: "white"
  }
];
