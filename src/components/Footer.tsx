import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me gustaría hacer una consulta sobre el restaurante.";
    const url = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Información del Restaurante */}
            <div className="footer-section">
              <div className="footer-brand">
                <h3 className="brand-name">{restaurantInfo.name}</h3>
                <p className="brand-tagline">
                  Sabores auténticos en un ambiente acogedor y moderno
                </p>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin className="contact-icon" size={18} />
                  <span>{restaurantInfo.address}</span>
                </div>
                
                <div className="contact-item">
                  <Phone className="contact-icon" size={18} />
                  <span>{restaurantInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div className="footer-section">
              <h4 className="footer-title">Enlaces Rápidos</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/" className="footer-link">Inicio</Link>
                </li>
                <li>
                  <Link to="/menu" className="footer-link">Nuestro Menú</Link>
                </li>
                <li>
                  <Link to="/reservations" className="footer-link">Reservas</Link>
                </li>
                <li>
                  <Link to="/cart" className="footer-link">Carrito</Link>
                </li>
              </ul>
            </div>

            {/* Horarios */}
            <div className="footer-section">
              <h4 className="footer-title">Horarios de Atención</h4>
              <div className="hours-list">
                {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                  <div key={day} className="hours-item">
                    <Clock className="hours-icon" size={16} />
                    <div className="hours-info">
                      <span className="day">{day}</span>
                      <span className="time">{hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes Sociales y Contacto */}
            <div className="footer-section">
              <h4 className="footer-title">Síguenos</h4>
              <p className="social-text">
                Mantente al día con nuestras ofertas y novedades
              </p>
              
              <div className="social-links">
                <button onClick={handleWhatsAppClick} className="social-btn whatsapp">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </button>
                
                <a href="#" className="social-btn instagram">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                
                <a href="#" className="social-btn facebook">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
              </div>

              <div className="newsletter">
                <h5 className="newsletter-title">Newsletter</h5>
                <div className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Tu email" 
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-copyright">
              <p>
                © {currentYear} {restaurantInfo.name}. Todos los derechos reservados.
              </p>
              <p className="footer-credits">
                Diseñado con ❤️ para brindar la mejor experiencia gastronómica
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
