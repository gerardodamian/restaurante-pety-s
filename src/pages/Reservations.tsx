import React, { useState } from 'react';
import { Calendar, Users, Star, MessageCircle } from 'lucide-react';
import { featuredReviews, restaurantInfo } from '../data/restaurantData';
import type { Reservation, Review } from '../types';
import './Reservations.css';

const Reservations: React.FC = () => {
  const [reservation, setReservation] = useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    message: ''
  });

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const [reviews, setReviews] = useState<Review[]>(featuredReviews);

  const handleReservationChange = (field: keyof Reservation, value: string | number) => {
    setReservation(prev => ({ ...prev, [field]: value }));
  };

  const handleReviewChange = (field: string, value: string | number) => {
    setNewReview(prev => ({ ...prev, [field]: value }));
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reservation.name || !reservation.phone || !reservation.date || !reservation.time) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const message = `¡Hola! Quiero hacer una reserva:\n\n` +
      `*Datos de la reserva:*\n` +
      `Nombre: ${reservation.name}\n` +
      `Teléfono: ${reservation.phone}\n` +
      `Email: ${reservation.email}\n` +
      `Fecha: ${reservation.date}\n` +
      `Hora: ${reservation.time}\n` +
      `Cantidad de personas: ${reservation.guests}\n` +
      (reservation.message ? `Comentarios: ${reservation.message}\n` : '');

    const url = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Reset form
    setReservation({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      message: ''
    });
    
    alert('¡Solicitud de reserva enviada! Te contactaremos pronto para confirmar.');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name || !newReview.comment) {
      alert('Por favor completa tu nombre y comentario');
      return;
    }

    const review: Review = {
      id: Date.now().toString(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews(prev => [review, ...prev]);
    setNewReview({ name: '', rating: 5, comment: '' });
    alert('¡Gracias por tu reseña!');
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={`star ${star <= rating ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  return (
    <div className="reservations-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Reservas y Reseñas</h1>
          <p className="page-subtitle">
            Reserva tu mesa o comparte tu experiencia con nosotros
          </p>
        </div>

        <div className="content-grid">
          {/* Formulario de Reservas */}
          <div className="reservation-section">
            <div className="section-card">
              <h2 className="section-title">
                <Calendar className="section-icon" />
                Hacer una Reserva
              </h2>
              
              <form onSubmit={handleReservationSubmit} className="reservation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="res-name">Nombre completo *</label>
                    <input
                      type="text"
                      id="res-name"
                      value={reservation.name}
                      onChange={(e) => handleReservationChange('name', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="res-phone">Teléfono *</label>
                    <input
                      type="tel"
                      id="res-phone"
                      value={reservation.phone}
                      onChange={(e) => handleReservationChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="res-email">Email</label>
                  <input
                    type="email"
                    id="res-email"
                    value={reservation.email}
                    onChange={(e) => handleReservationChange('email', e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="res-date">Fecha *</label>
                    <input
                      type="date"
                      id="res-date"
                      value={reservation.date}
                      onChange={(e) => handleReservationChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="res-time">Hora *</label>
                    <select
                      id="res-time"
                      value={reservation.time}
                      onChange={(e) => handleReservationChange('time', e.target.value)}
                      required
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="res-guests">Cantidad de personas</label>
                  <div className="guests-selector">
                    <Users className="guests-icon" />
                    <select
                      id="res-guests"
                      value={reservation.guests}
                      onChange={(e) => handleReservationChange('guests', parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="res-message">Comentarios adicionales</label>
                  <textarea
                    id="res-message"
                    value={reservation.message}
                    onChange={(e) => handleReservationChange('message', e.target.value)}
                    placeholder="Alguna solicitud especial, alergias, etc."
                    rows={3}
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <MessageCircle size={20} />
                  Enviar Reserva por WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Sección de Reseñas */}
          <div className="reviews-section">
            {/* Formulario para nueva reseña */}
            <div className="section-card">
              <h2 className="section-title">
                <Star className="section-icon" />
                Deja tu Reseña
              </h2>
              
              <form onSubmit={handleReviewSubmit} className="review-form">
                <div className="form-group">
                  <label htmlFor="review-name">Tu nombre *</label>
                  <input
                    type="text"
                    id="review-name"
                    value={newReview.name}
                    onChange={(e) => handleReviewChange('name', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Calificación *</label>
                  {renderStars(newReview.rating, true, (rating) => handleReviewChange('rating', rating))}
                </div>

                <div className="form-group">
                  <label htmlFor="review-comment">Tu experiencia *</label>
                  <textarea
                    id="review-comment"
                    value={newReview.comment}
                    onChange={(e) => handleReviewChange('comment', e.target.value)}
                    placeholder="Cuéntanos sobre tu experiencia en nuestro restaurante..."
                    rows={4}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn secondary">
                  Publicar Reseña
                </button>
              </form>
            </div>

            {/* Reseñas existentes */}
            <div className="section-card">
              <h2 className="section-title">Reseñas de Clientes</h2>
              
              <div className="reviews-list">
                {reviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h4 className="reviewer-name">{review.name}</h4>
                        <span className="review-date">
                          {new Date(review.date).toLocaleDateString('es-CL')}
                        </span>
                      </div>
                      {renderStars(review.rating)}
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
