import React, { createContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { CartItem, MenuItem } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: MenuItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType {
  state: CartState;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export { CartContext };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
      } else {
        const newItems = [...state.items, { ...action.payload, quantity: 1 }];
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
      }
      
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0 };
    
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addItem = (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart, getItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// useCart hook moved to useCart.ts for Fast Refresh compatibility
