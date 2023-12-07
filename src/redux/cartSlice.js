// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], favorites: [] },  // Added favorites array to state
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    incrementCount: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementCount: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    addToFavorite: (state, action) => {
      const product = action.payload;
      if (!state.favorites.find(item => item.id === product.id)) {
        state.favorites.push(product);
      }
    },
    removeFromFavorite: (state, action) => {
      const productId = action.payload;
      state.favorites = state.favorites.filter(item => item.id !== productId);
    },
  },
});

export const { addToCart, removeFromCart, incrementCount, decrementCount, clearCart, addToFavorite, removeFromFavorite } = cartSlice.actions;


export default cartSlice.reducer;
