import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/useCart';
import { menuItems, categories } from '../data/restaurantData';
import type { MenuItem } from '../types';
import './Menu.css';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const { addItem } = useCart();

  const filteredItems = selectedCategory === 'Todas' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    // Mostrar feedback visual temporal
    const button = document.querySelector(`[data-item-id="${item.id}"]`);
    if (button) {
      button.classList.add('added');
      setTimeout(() => {
        button.classList.remove('added');
      }, 600);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
  };

  return (
    <div className="menu-page">
      <div className="container">
        <div className="menu-header">
          <h1 className="page-title">Nuestro Menú</h1>
          <p className="page-subtitle">
            Descubre nuestros deliciosos platos preparados con ingredientes frescos y de calidad
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item-card">
              <div className="item-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="item-category">{item.category}</div>
              </div>
              
              <div className="item-content">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
                
                <div className="item-footer">
                  <span className="item-price">{formatPrice(item.price)}</span>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(item)}
                    data-item-id={item.id}
                  >
                    <Plus size={16} />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-items">
            <p>No hay elementos en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
