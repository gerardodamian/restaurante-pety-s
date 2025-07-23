import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { restaurantInfo, weeklyOffers } from '../data/restaurantData';
import './Home.css';

const Home: React.FC = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  const handleWhatsAppClick = () => {
    const message = "¡Hola! Me gustaría hacer una consulta sobre el restaurante.";
    const url = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const nextOffer = () => {
    setCurrentOffer((prev) => (prev + 1) % weeklyOffers.length);
  };

  const prevOffer = () => {
    setCurrentOffer((prev) => (prev - 1 + weeklyOffers.length) % weeklyOffers.length);
  };

  useEffect(() => {
    const interval = setInterval(nextOffer, 5000); // Cambio automático cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Offers Banner Carousel */}
      <section className="offers-banner">
        <div className="offers-carousel">
          <div 
            className="offer-slide"
            style={{ background: weeklyOffers[currentOffer].bgColor }}
          >
            <div className="offer-content">
              <div className="offer-text">
                <div className="offer-discount">{weeklyOffers[currentOffer].discount}</div>
                <h2 className="offer-title">{weeklyOffers[currentOffer].title}</h2>
                <h3 className="offer-subtitle">{weeklyOffers[currentOffer].subtitle}</h3>
                <p className="offer-description">{weeklyOffers[currentOffer].description}</p>
                <div className="offer-validity">{weeklyOffers[currentOffer].validUntil}</div>
                <Link to="/menu" className="offer-cta">
                  ¡Pedir Ahora!
                </Link>
              </div>
              <div className="offer-image">
                <img 
                  src={weeklyOffers[currentOffer].image} 
                  alt={weeklyOffers[currentOffer].title}
                />
              </div>
            </div>
            
            <button className="carousel-btn prev-btn" onClick={prevOffer}>
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-btn next-btn" onClick={nextOffer}>
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="carousel-indicators">
            {weeklyOffers.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentOffer ? 'active' : ''}`}
                onClick={() => setCurrentOffer(index)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a {restaurantInfo.name}</h1>
          <p className="hero-subtitle">
            Descubre los sabores más exquisitos en un ambiente acogedor y moderno
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              Ver Menú
            </Link>
            <button onClick={handleWhatsAppClick} className="btn btn-secondary">
              <MessageCircle size={20} />
              Contactar
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop" 
            alt="Interior del restaurante"
          />
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offerings">
        <div className="container">
          <h2 className="section-title">¿Qué Ofrecemos?</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-icon">🍕</div>
              <h3>Comida Artesanal</h3>
              <p>Pizzas artesanales, pastas frescas y platos principales preparados con ingredientes de la más alta calidad.</p>
            </div>
            <div className="offering-card">
              <div className="offering-icon">🚚</div>
              <h3>Delivery y Retiro</h3>
              <p>Servicio de entrega a domicilio y opción de retiro en local para tu comodidad.</p>
            </div>
            <div className="offering-card">
              <div className="offering-icon">🎉</div>
              <h3>Eventos y Reservas</h3>
              <p>Ambiente perfecto para celebraciones, cenas románticas y reuniones familiares.</p>
            </div>
            <div className="offering-card">
              <div className="offering-icon">⭐</div>
              <h3>Experiencia Única</h3>
              <p>Atención personalizada y un ambiente cálido que te hará sentir como en casa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location and Hours Section */}
      <section className="location-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-content">
              <h2 className="section-title">Visítanos</h2>
              
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h3>Ubicación</h3>
                  <p>{restaurantInfo.address}</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h3>Horarios de Atención</h3>
                  {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                    <p key={day}><strong>{day}:</strong> {hours}</p>
                  ))}
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h3>Contacto</h3>
                  <p>{restaurantInfo.phone}</p>
                </div>
              </div>

              <button onClick={handleWhatsAppClick} className="whatsapp-btn">
                <MessageCircle size={20} />
                Contactar por WhatsApp
              </button>
            </div>

            <div className="map-container">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d${restaurantInfo.location.lng}!3d${restaurantInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwNDAnMDkuNCJX!5e0!3m2!1sen!2scl!4v1234567890123`}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del restaurante"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
