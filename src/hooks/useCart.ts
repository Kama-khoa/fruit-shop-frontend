'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();

  // Load cart from localStorage or API
  useEffect(() => {
    const loadCart = async () => {
      if (isAuthenticated && user) {
        // Load from API for authenticated users
        try {
          // API call to get user's cart
        } catch (error) {
          console.error('Error loading cart:', error);
        }
      } else {
        // Load from localStorage for guests
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          setItems(JSON.parse(savedCart));
        }
      }
    };

    loadCart();
  }, [isAuthenticated, user]);

  // Save cart to localStorage for guests
  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, isAuthenticated]);

  const addToCart = async (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
    if (isAuthenticated) {
      // API call to add to cart
    } else {
      // Add to local state
      setItems(prev => {
        const existingItem = prev.find(i => i.productId === item.productId);
        if (existingItem) {
          return prev.map(i => 
            i.productId === item.productId 
              ? { ...i, quantity: i.quantity + quantity }
              : i
          );
        }
        return [...prev, { ...item, quantity }];
      });
    }
  };

  const removeFromCart = async (productId: string) => {
    if (isAuthenticated) {
      // API call to remove from cart
    } else {
      setItems(prev => prev.filter(item => item.productId !== productId));
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(productId);
      return;
    }

    if (isAuthenticated) {
      // API call to update quantity
    } else {
      setItems(prev =>
        prev.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = async () => {
    if (isAuthenticated) {
      // API call to clear cart
    } else {
      setItems([]);
    }
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    items,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };
};