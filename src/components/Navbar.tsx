import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/useCart';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getItemCount } = useCart();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/menu', label: 'Menú' },
    { path: '/reservations', label: 'Reservas' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            Petys Restaurant
          </Link>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-link">
            <ShoppingCart size={24} />
            {getItemCount() > 0 && (
              <span className="cart-badge">{getItemCount()}</span>
            )}
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
