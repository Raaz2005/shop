// --- File: src/app/store.js ---

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Registers the cart slice
  },
});