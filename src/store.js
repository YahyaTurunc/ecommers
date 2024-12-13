import { configureStore, createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('products');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error('Error loading state from localStorage:', error);
        return [];
    }
};

const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('products', serializedState);
    } catch (error) {
        console.error('Error saving state to localStorage:', error);
    }
};

const productSlice = createSlice({
    name: 'products',
    initialState: loadStateFromLocalStorage(),
    reducers: {
        addProduct: (state, action) => {
            const newState = [...state, action.payload];
            saveStateToLocalStorage(newState);
            return newState;
        },
        removeProduct: (state, action) => {
            const newState = state.filter((product) => product.id !== action.payload);
            saveStateToLocalStorage(newState);
            return newState;
        },
        clearProduct: () => {
            saveStateToLocalStorage([]);
            return [];
        },
        
    },
});
export const { addProduct, removeProduct, clearProduct } = productSlice.actions;
export default configureStore({
    reducer: {
        products: productSlice.reducer,
    },
});