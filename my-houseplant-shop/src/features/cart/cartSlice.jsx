import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Static product list (2 points for displaying 6 items)
  products: [
    { id: 'p1', name: 'Snake Plant', price: 15.99, category: 'Low Light', thumbnail: '[attachment_0](attachment)', quantity: 1 },
    { id: 'p2', name: 'ZZ Plant', price: 19.50, category: 'Low Light', thumbnail: '[attachment_1](attachment)', quantity: 1 },
    { id: 'p3', name: 'Monstera Deliciosa', price: 35.00, category: 'High Light', thumbnail: '[attachment_2](attachment)', quantity: 1 },
    { id: 'p4', name: 'Pothos', price: 12.00, category: 'Vines', thumbnail: '', quantity: 1 },
    { id: 'p5', name: 'Fiddle Leaf Fig', price: 49.99, category: 'High Light', thumbnail: '[attachment_3](attachment)', quantity: 1 },
    { id: 'p6', name: 'Spider Plant', price: 10.50, category: 'Vines', thumbnail: '[attachment_4](attachment)', quantity: 1 },
  ],
  cartItems: [], // This array holds items the user has added
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Helper function to update derived totals
    updateTotals: (state) => {
      state.totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalCost = state.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    // 1. Add to Cart (6 points)
    addToCart: (state, action) => {
      const newItem = action.payload; // This is the plant object from the product page
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment if already there
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 }); // Add new item with quantity 1
      }
      cartSlice.casereducers.updateTotals(state); // Update totals
    },

    // 2. Increase Quantity (4 points)
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload); // payload is the item ID
      if (item) {
        item.quantity += 1;
        cartSlice.casereducers.updateTotals(state);
      }
    },

    // 3. Decrease Quantity (4 points)
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        cartSlice.casereducers.updateTotals(state);
      } else if (item && item.quantity === 1) {
         // Optional: Remove if quantity goes to zero
         state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
         cartSlice.casereducers.updateTotals(state);
      }
    },

    // 4. Delete Item (2 points)
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      cartSlice.casereducers.updateTotals(state);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;