import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    allarticles: [

        { id: 'camarosa01', image: 'camarosa.jpg', name: 'CAMA', price: 5500, category: "camas", talle: '', size: ['s', 'm', 'g'], stock: '2' },
        { id: 'mordisco01', image: 'mordisco.jpg', name: 'MORDISCO', price: 560, category: "juguetes", color: '', stock: '2' },
        { id: 'bandeja01', image: 'bandeja.jpg', name: 'BANDEJA SANITARIA', price: 1500, category: "higiene", size: ['s', 'm', 'g'], stock: '10' },
        { id: 'cepillo01', image: 'cepillo.jpg', name: 'CEPILLO', price: 850, category: "higiene", stock: '8' },
        { id: 'perfume01', image: 'perfume.jpg', name: 'PERFUME', price: 1850, category: "higiene", stock: '12' },
        { id: 'camaoso01', image: 'camaoso.jpg', name: 'CAMA HUELLA', price: 6590, category: "camas", talle: '', size: ['s', 'm', 'g'], stock: '1' },
        { id: 'shampoo01', image: 'shampoo.jpg', name: 'SHAMPOO', price: 965, category: "higiene", stock: '14' },
        { id: 'hueso01', image: 'hueso.jpg', name: 'MORDISCO HUESO', price: 690, category: "juguetes", color: '', stock: '' },
        { id: 'palta01', image: 'palta.jpg', name: 'CHIFLE PALTA', price: 2660, category: "juguetes", stock: '2' },
        { id: 'cama01', image: 'cama.jpg', name: 'CAMA', price: 4100, category: "camas", amount: 1, talle: '', size: ['s', 'm', 'g'], stock: '2' },
        { id: 'pelota01', image: 'pelota.jpg', name: 'PELOTA', price: 390, category: "juguetes", stock: '12' },
        { id: 'extensible01', image: 'extensible.jpg', name: 'CORREA EXTENSIBLE', price: 452, category: "elementos de paseo", color: '', stock: '4' },
        { id: 'camacolchoneta01', image: 'camacolchoneta.jpg', name: 'CAMA COLCHONETA', price: 4500, category: "camas", talle: '', size: ['s', 'm', 'g'], stock: '5' },
        { id: 'collar01', image: 'collar.jpg', name: 'COLLAR PARA PERRO', price: 1330, category: "elementos de paseo", talle: '', color: '', size: ['s', 'm', 'g'], stock: '5' },
        { id: 'pretal01', image: 'pretal.jpg', name: 'PRETAL PARA PERRO', price: '1960', category: "elementos de paseo", talle: '', color: '', size: ['s', 'm', 'g'], stock: '7' },
        { id: 'camaanimada01', image: 'camaanimada.jpg', name: 'CAMA ANIMADA', price: 8050, category: "camas", talle: '' },
        { id: 'correal01', image: 'correa.jpg', name: 'CORREA', price: 1260, category: "elementos de paseo", color: '', stock: '5' },
    ]
}


const SliceProducts = createSlice({
    name: "products",
    initialState,
    reducers: {

    }

})

export default SliceProducts.reducer;
