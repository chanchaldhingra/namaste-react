import { configureStore } from '@reduxjs/toolkit';
import * as cartReducer from './cartSlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer.default
    }
});

export default appStore;