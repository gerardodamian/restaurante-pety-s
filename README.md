# 🍽️ Petys Restaurant - Sitio Web Moderno

Un sitio web moderno, responsivo y completamente funcional para restaurante, desarrollado con React, TypeScript y Vite.

## ✨ Características

### 🏠 Página de Inicio
- Bienvenida con imagen destacada
- Sección "Qué ofrecemos" con servicios del restaurante
- Ubicación con mapa embebido de Google Maps
- Horarios de atención
- Botón de contacto por WhatsApp

### 🍕 Menú + Carrito de Compras
- Listado visual de productos con imágenes, nombres, descripciones y precios
- Sistema de carrito de compras funcional
- Filtros por categorías de comida
- Modalidades de compra: Retiro en local y Entrega a domicilio
- Métodos de pago: Transferencia y Efectivo
- Formulario de datos del cliente
- Envío de pedido por WhatsApp

### 📅 Reservas y Reseñas
- Formulario para hacer reservas (nombre, fecha, hora, cantidad de personas)
- Sistema de reseñas con calificación por estrellas
- Mostrar reseñas destacadas
- Envío de reservas por WhatsApp

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: CSS3 con diseño responsivo
- **State Management**: React Context API

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Verificar código con ESLint
npm run lint

# Previsualizar build de producción
npm run preview
```

## 📱 Características Responsivas

- **Mobile First**: Diseñado primero para dispositivos móviles
- **Tablets**: Optimizado para tabletas y dispositivos de tamaño medio
- **Desktop**: Experiencia completa en pantallas grandes
- **Navegación**: Menú hamburguesa en dispositivos móviles

## 🎨 Diseño

- **Paleta de colores cálida**: Naranjas y tierras que evocan calidez y apetito
- **Tipografía moderna**: Inter font para máxima legibilidad
- **Animaciones suaves**: Transiciones y efectos hover elegantes
- **Imágenes de alta calidad**: Unsplash para fotografías profesionales

## 🔧 Personalización

### Cambiar información del restaurante
Edita el archivo `src/data/restaurantData.ts`

### Agregar elementos al menú
Modifica el array `menuItems` en `src/data/restaurantData.ts`

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas principales
├── context/            # Context API para estado global
├── data/               # Datos del restaurante y menú
├── types/              # Definiciones de TypeScript
└── App.tsx            # Componente principal
```

## 🌟 Funcionalidades Destacadas

- ✅ Carrito de compras persistente
- ✅ Integración con WhatsApp para pedidos y reservas
- ✅ Filtros de menú por categorías
- ✅ Sistema de reseñas con calificaciones
- ✅ Mapa integrado de Google Maps
- ✅ Formularios validados
- ✅ Diseño completamente responsivo
- ✅ Optimizado para SEO
- ✅ Experiencia de usuario intuitiva

---

Desarrollado con ❤️ para la industria gastronómica

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
