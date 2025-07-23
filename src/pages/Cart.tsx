import React, { useState } from 'react';
import { Trash2, Plus, Minus, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { restaurantInfo } from '../data/restaurantData';
import type { CustomerInfo } from '../types';
import './Cart.css';

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: '',
    deliveryMethod: 'pickup',
    paymentMethod: 'transfer'
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    let message = `¡Hola! Quiero hacer un pedido:\n\n`;
    
    // Items del pedido
    state.items.forEach(item => {
      message += `• ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\n*Total: ${formatPrice(state.total)}*\n\n`;
    
    // Información del cliente
    message += `*Datos del cliente:*\n`;
    message += `Nombre: ${customerInfo.name}\n`;
    message += `Teléfono: ${customerInfo.phone}\n`;
    
    if (customerInfo.deliveryMethod === 'delivery') {
      message += `Dirección: ${customerInfo.address}\n`;
    }
    
    message += `Modalidad: ${customerInfo.deliveryMethod === 'pickup' ? 'Retiro en local' : 'Entrega a domicilio'}\n`;
    message += `Pago: ${customerInfo.paymentMethod === 'transfer' ? 'Transferencia' : 'Efectivo'}\n`;
    
    return encodeURIComponent(message);
  };

  const handleSendOrder = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Por favor completa los campos obligatorios (nombre y teléfono)');
      return;
    }
    
    if (customerInfo.deliveryMethod === 'delivery' && !customerInfo.address) {
      alert('Por favor ingresa tu dirección para el delivery');
      return;
    }

    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
    
    // Limpiar carrito después de enviar
    clearCart();
    setShowCheckout(false);
    alert('¡Pedido enviado! Te contactaremos pronto por WhatsApp.');
  };

  if (state.items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <h2>Tu carrito está vacío</h2>
            <p>¡Agrega algunos deliciosos platos a tu carrito!</p>
            <Link to="/menu" className="btn btn-primary">
              <ArrowLeft size={20} />
              Ver Menú
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1 className="page-title">Carrito de Compras</h1>
          <Link to="/menu" className="back-link">
            <ArrowLeft size={20} />
            Seguir comprando
          </Link>
        </div>

        {!showCheckout ? (
          <div className="cart-content">
            <div className="cart-items">
              {state.items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <span className="item-price">{formatPrice(item.price)}</span>
                  </div>
                  
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <div className="item-total">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="remove-btn"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Resumen del Pedido</h3>
                <div className="summary-line">
                  <span>Subtotal:</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                <div className="summary-line total">
                  <span>Total:</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                
                <button
                  onClick={() => setShowCheckout(true)}
                  className="checkout-btn"
                >
                  Proceder al Checkout
                </button>
                
                <button
                  onClick={clearCart}
                  className="clear-cart-btn"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="checkout-form">
            <h2>Información de Entrega</h2>
            
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                value={customerInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                value={customerInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Modalidad de entrega</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    value="pickup"
                    checked={customerInfo.deliveryMethod === 'pickup'}
                    onChange={(e) => handleInputChange('deliveryMethod', e.target.value as 'pickup' | 'delivery')}
                  />
                  <span>Retiro en local</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    value="delivery"
                    checked={customerInfo.deliveryMethod === 'delivery'}
                    onChange={(e) => handleInputChange('deliveryMethod', e.target.value as 'pickup' | 'delivery')}
                  />
                  <span>Entrega a domicilio</span>
                </label>
              </div>
            </div>

            {customerInfo.deliveryMethod === 'delivery' && (
              <div className="form-group">
                <label htmlFor="address">Dirección de entrega *</label>
                <input
                  type="text"
                  id="address"
                  value={customerInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label>Método de pago</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    value="transfer"
                    checked={customerInfo.paymentMethod === 'transfer'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value as 'transfer' | 'cash')}
                  />
                  <span>Transferencia bancaria</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    value="cash"
                    checked={customerInfo.paymentMethod === 'cash'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value as 'transfer' | 'cash')}
                  />
                  <span>Efectivo</span>
                </label>
              </div>
            </div>

            <div className="checkout-actions">
              <button
                onClick={() => setShowCheckout(false)}
                className="back-btn"
              >
                Volver al carrito
              </button>
              
              <button
                onClick={handleSendOrder}
                className="send-order-btn"
              >
                <MessageCircle size={20} />
                Enviar pedido por WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
