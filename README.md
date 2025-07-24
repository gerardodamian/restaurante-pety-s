<div align="center">

# 🍽️ Petys Restaurant

### *Sitio Web Moderno para Restaurante*

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)

*Un sitio web completamente funcional, responsivo y moderno desarrollado con las últimas tecnologías web*

[🚀 Demo en Vivo](#) • [📋 Características](#-características) • [🛠️ Instalación](#️-instalación)

</div>

---

## 🌟 Características Destacadas

<div align="center">

### 🏠 **Página de Inicio Atractiva**
*Carrusel de ofertas, servicios destacados y ubicación con mapa integrado*

### 🍕 **Menú Digital + Carrito**
*Sistema completo de pedidos con filtros, carrito persistente y envío por WhatsApp*

### 📅 **Reservas y Reseñas**
*Formularios intuitivos para reservas y sistema de calificaciones con estrellas*

</div>

---

## 📱 Vista Previa

<div align="center">

| 🖥️ Desktop | 📱 Mobile | 🍔 Menú |
|:---:|:---:|:---:|
| ![Desktop](https://via.placeholder.com/300x200/ff6b35/ffffff?text=Desktop+View) | ![Mobile](https://via.placeholder.com/150x250/ff6b35/ffffff?text=Mobile+View) | ![Menu](https://via.placeholder.com/300x200/ff6b35/ffffff?text=Menu+System) |

</div>

---

## ✨ Funcionalidades Principales

<table>
<tr>
<td width="50%">

### 🏠 **Página de Inicio**
- ✅ Carrusel de ofertas especiales
- ✅ Sección "Qué ofrecemos"
- ✅ Mapa embebido de Google Maps
- ✅ Horarios de atención
- ✅ Contacto directo por WhatsApp

</td>
<td width="50%">

### 🍽️ **Menú Digital**
- ✅ Catálogo visual con imágenes HD
- ✅ Filtros por categorías
- ✅ Carrito de compras persistente
- ✅ Modalidades: Retiro y Delivery
- ✅ Envío automático por WhatsApp

</td>
</tr>
<tr>
<td width="50%">

### 📅 **Sistema de Reservas**
- ✅ Formulario intuitivo
- ✅ Validación en tiempo real
- ✅ Confirmación por WhatsApp
- ✅ Gestión de horarios

</td>
<td width="50%">

### ⭐ **Reseñas y Calificaciones**
- ✅ Sistema de 5 estrellas
- ✅ Comentarios de clientes
- ✅ Reseñas destacadas
- ✅ Interfaz moderna

</td>
</tr>
</table>

---

## 🛠️ Stack Tecnológico

<div align="center">

| Frontend | Build Tools | Development |
|:---:|:---:|:---:|
| ![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) |

</div>

### 🔧 **Tecnologías Utilizadas**
- **Frontend Framework**: React 18 con Hooks y Componentes Funcionales
- **Lenguaje**: TypeScript para type safety
- **Build Tool**: Vite para desarrollo rápido
- **Routing**: React Router DOM v6
- **Iconografía**: Lucide React
- **Estilos**: CSS3 Vanilla con metodología modular
- **Estado Global**: React Context API

---

## 🚀 Instalación y Configuración

### 📋 **Prerrequisitos**
```bash
Node.js >= 18.0.0
npm >= 8.0.0 (o yarn >= 1.22.0)
```

### ⚡ **Instalación Rápida**

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/petys-restaurant.git

# 2. Navegar al directorio
cd petys-restaurant

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

### 🎯 **Scripts Disponibles**

```bash
# 🔥 Desarrollo
npm run dev          # Servidor de desarrollo con HMR

# 🏗️ Producción
npm run build        # Build optimizado para producción
npm run preview      # Previsualizar build de producción

# 🔍 Calidad de Código
npm run lint         # Verificar código con ESLint
npm run type-check   # Verificar tipos de TypeScript
```

---

## 📱 Diseño Responsive

<div align="center">

### 🎨 **Mobile First Design**

</div>

| Dispositivo | Breakpoint | Características |
|:---:|:---:|:---|
| 📱 **Mobile** | `< 768px` | Menú hamburguesa, cards apiladas, botones táctiles optimizados |
| 📟 **Tablet** | `768px - 1024px` | Layout de 2 columnas, navegación adaptativa |
| 🖥️ **Desktop** | `> 1024px` | Experiencia completa, hover effects, layout de 3-4 columnas |

### 🎨 **Sistema de Diseño**

- **🎨 Paleta de Colores**: Naranjas cálidos (#ff6b35) y tonos tierra
- **📝 Tipografía**: Inter font para máxima legibilidad
- **✨ Animaciones**: Transiciones suaves con `cubic-bezier`
- **📸 Imágenes**: Alta resolución de Unsplash

---

## 📂 Estructura del Proyecto

```
src/
├── 📁 components/          # Componentes reutilizables
│   ├── Header/            # Navegación principal
│   ├── Footer/            # Pie de página
│   └── UI/                # Componentes de interfaz
├── 📁 pages/              # Páginas principales
│   ├── Home/              # Página de inicio
│   ├── Menu/              # Menú y carrito
│   └── Reservas/          # Sistema de reservas
├── 📁 context/            # Estado global con Context API
├── 📁 data/               # Datos estáticos del restaurante
├── 📁 types/              # Definiciones TypeScript
├── 📁 utils/              # Utilidades y helpers
└── 📄 App.tsx            # Componente raíz
```

---

## ⚙️ Personalización

### 🏪 **Cambiar Información del Restaurante**

```typescript
// src/data/restaurantData.ts
export const restaurantInfo = {
  name: "Tu Restaurante",
  phone: "+54 9 11 1234-5678",
  address: "Tu dirección completa",
  // ... más configuraciones
};
```

### 🍕 **Agregar Elementos al Menú**

```typescript
// src/data/restaurantData.ts
export const menuItems: MenuItem[] = [
  {
    id: "nuevo-item",
    name: "Nuevo Plato",
    description: "Descripción del plato",
    price: 12500,
    image: "url-de-la-imagen",
    category: "Categoría",
  },
  // ... más items
];
```

---

## 🌟 Características Avanzadas

<div align="center">

### 🔥 **Optimizaciones de Performance**
- **⚡ Lazy Loading**: Carga dinámica de componentes
- **📦 Code Splitting**: División automática del código
- **🖼️ Image Optimization**: Imágenes optimizadas y responsive
- **💾 Local Storage**: Persistencia del carrito de compras

### 🚀 **SEO y Accesibilidad**
- **🔍 Meta Tags**: Optimización para motores de búsqueda
- **♿ ARIA Labels**: Accesibilidad completa
- **📱 PWA Ready**: Preparado para Progressive Web App
- **🌐 Social Media**: Open Graph y Twitter Cards

</div>

---

## 🤝 Contribución

<div align="center">

### ¿Quieres contribuir? ¡Genial! 🎉

</div>

1. **🍴 Fork** el proyecto
2. **🌿 Crear** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **💾 Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **📤 Push** a la rama (`git push origin feature/AmazingFeature`)
5. **🔀 Abrir** un Pull Request

---

## 📄 Licencia

<div align="center">

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

</div>

---

## 👨‍💻 Autor

<div align="center">

**Desarrollado con ❤️ para la industria gastronómica**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tu-perfil)

</div>

---

<div align="center">

### 🌟 ¡Dale una estrella si te gustó el proyecto! ⭐

*¿Encontraste algún bug? [Abre un issue](https://github.com/tu-usuario/petys-restaurant/issues)*

</div>
