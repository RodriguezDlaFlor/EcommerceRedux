import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart: localStorage.getItem('ItemsCart') ? JSON.parse(localStorage.getItem('ItemsCart')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}


const SliceShopping = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].amount += 1;
            } else {
                const temArticle = { ...action.payload, amount: 1 }
                state.cart.push(temArticle);
            }
            localStorage.setItem('ItemsCart', JSON.stringify(state.cart))
        },
        deleteProduct: (state, action) => {
            const productDelete = state.cart.filter((item) =>
                item.id !== action.payload.id)
            state.cart = productDelete
            localStorage.setItem('ItemsCart', JSON.stringify(state.cart))
        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.setItem('ItemsCart', JSON.stringify(state.cart))
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
            if (state.cart[itemIndex].amount > 1) {
                state.cart[itemIndex].amount -= 1
            } else if (state.cart[itemIndex].amount === 1) {
                const productDecrease = state.cart.filter((item) =>
                    item.id !== action.payload.id)
                state.cart = productDecrease
                localStorage.setItem('ItemsCart', JSON.stringify(state.cart))
            }

        },
        increaseCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
            if (state.cart[itemIndex].amount >= 1) {
                state.cart[itemIndex].amount += 1
                localStorage.setItem('ItemsCart', JSON.stringify(state.cart))
            }

        },

        totalAmount: (state) => {
            const total = state.cart.reduce((accumulator, element) => accumulator + parseInt(element.price * element.amount), 0)
            state.cartTotalAmount = total
        }
    }
})

export default SliceShopping.reducer;
export const { addToCart, deleteProduct, clearCart, decreaseCart, increaseCart, totalAmount } = SliceShopping.actions;
