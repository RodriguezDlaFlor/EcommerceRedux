import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    checkout: [{
        firstName: '',
        address: '',
        lastName: '',
        city: '',
        state: '',
        zip: '',
        country: '',


    }]
}


const SliceCheckout = createSlice({
    name: "checkout",
    initialState,
    reducers: {

    }


})

export default SliceCheckout.reducer;
