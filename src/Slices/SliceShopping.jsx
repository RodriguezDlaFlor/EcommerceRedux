import { createSlice } from "@reduxjs/toolkit"
import Swal from "sweetalert2";

const initialState = {
    cart: localStorage.getItem('ItemsCart') ? JSON.parse(localStorage.getItem('ItemsCart')) : [],
    cartTotalQuantity: 0

}
const SliceShopping = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                if (state.cart[itemIndex].amount >= state.cart[itemIndex].stock) {
                    Swal.fire({
                        title: 'Lo sentimos!',
                        text: 'No hay más stock',
                        icon: 'ok',
                    })
                } else {
                    state.cart[itemIndex].amount += 1
                    localStorage.setItem('ItemsCart', JSON.stringify(state.cart))
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 900,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Agregando al carrito'
                    })
                }
            }
            else {
                const temArticle = { ...action.payload, amount: 1 }
                state.cart.push(temArticle);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 900,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Agregando al carrito'
                })
            }
        },
        deleteProduct: (state, action) => {
            const productDelete = state.cart.filter((item) =>
                item.id !== action.payload.id)
            state.cart = productDelete
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 900,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Eliminando del carrito'
            })
        },
        clearCart: (state) => {
            state.cart = [];
            state.cartTotalQuantity = 0
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
            if (state.cart[itemIndex].amount > 1) {
                state.cart[itemIndex].amount -= 1
            } else if (state.cart[itemIndex].amount === 1) {
                const productDecrease = state.cart.filter((item) =>
                    item.id !== action.payload.id)
                state.cart = productDecrease
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 900,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Eliminando del carrito'
                })
            }
        },
        increaseCart: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
            if (state.cart[itemIndex].amount >= 1) {
                if (state.cart[itemIndex].amount >= state.cart[itemIndex].stock) {
                    Swal.fire({
                        title: 'Lo sentimos!',
                        text: 'No hay más stock',
                        icon: 'ok',

                    })
                } else {
                    state.cart[itemIndex].amount += 1
                }
            }
        },
        finalizeCart: (state, action) => {

            const finalize = state.cart.map((item) => 'nombre: ' + item.name + ' cantidad: ' + item.amount + ' precio: $ ' + item.price)
            localStorage.setItem('compra', JSON.stringify(finalize))
            Swal.fire({
                title: 'Exito!',
                text: 'Compra finalizada!',
                icon: 'success',
            })
            state.cart = [];

        },
        amountCart: (state) => {
            const amount = state.cart.reduce((accumulator, element) => accumulator + parseInt(element.amount + element.amount), 0)
            state.cart = { ...state.cart, amount }
        },
        cartTotal: (state) => {
            const total = state.cart.reduce((accumulator, element) => accumulator + parseInt(element.price * element.amount), 0)
            state.cartTotalQuantity = total
        }
    }
})

export default SliceShopping.reducer;
export const { addToCart, deleteProduct, clearCart, decreaseCart, increaseCart, cartTotal, finalizeCart, amountCart } = SliceShopping.actions;
