import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    allarticles: [

        { id: 'camarosa01', image: 'camarosa.jpg', name: 'CAMA', price: 5500, category: "camas", talle: '' },
        { id: 'mordisco01', image: 'mordisco.jpg', name: 'MORDISCO', price: 560, category: "juguetes", color: '' },
        { id: 'bandeja01', image: 'bandeja.jpg', name: 'BANDEJA SANITARIA', price: 1500, category: "higiene", },
        { id: 'cepillo01', image: 'cepillo.jpg', name: 'CEPILLO', price: 850, category: "higiene", },
        { id: 'perfume01', image: 'perfume.jpg', name: 'PERFUME', price: 1850, category: "higiene", },
        { id: 'camaoso01', image: 'camaoso.jpg', name: 'CAMA HUELLA', price: 6590, category: "camas", talle: '' },
        { id: 'shampoo01', image: 'shampoo.jpg', name: 'SHAMPOO', price: 965, category: "higiene", },
        { id: 'hueso01', image: 'hueso.jpg', name: 'MORDISCO HUESO', price: 690, category: "juguetes", color: '' },
        { id: 'palta01', image: 'palta.jpg', name: 'CHIFLE PALTA', price: 2660, category: "juguetes", },
        { id: 'cama01', image: 'cama.jpg', name: 'CAMA', category: "camas", amount: 1, talle: '' },
        { id: 'pelota01', image: 'pelota.jpg', name: 'PELOTA', price: 390, category: "juguetes", },
        { id: 'extensible01', image: 'extensible.jpg', name: 'CORREA EXTENSIBLE', price: 452, category: "elementos de paseo", color: '' },
        { id: 'camacolchoneta01', image: 'camacolchoneta.jpg', name: 'CAMA COLCHONETA', price: 4500, category: "camas", talle: '' },
        { id: 'collar01', image: 'collar.jpg', name: 'COLLAR PARA PERRO', price: 1330, category: "elementos de paseo", talle: '', color: '' },
        { id: 'pretal01', image: 'pretal.jpg', name: 'PRETAL PARA PERRO', price: '1960', category: "elementos de paseo", talle: '', color: '' },
        { id: 'camaanimada01', image: 'camaanimada.jpg', name: 'CAMA ANIMADA', price: 8050, category: "camas", talle: '' },
        { id: 'correal01', image: 'correa.jpg', name: 'CORREA', price: '1260', category: "elementos de paseo", color: '' },
    ]
}


const SliceProducts = createSlice({
    name: "products",
    initialState,
    reducers: {

    }

})

export default SliceProducts.reducer;
