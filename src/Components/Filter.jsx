import React from "react";
import { useSelector } from "react-redux";

function Filter({ setFilter }) {
    const { allarticles } = useSelector(state => state.products)

    const filterProducts = (e) => {
        const producFiltr = allarticles.filter((product) =>
            product.category === e.target.value)
        setFilter(producFiltr)
    }
    return (

        <select onChange={(e) => filterProducts(e)} className="btn btn-outline boton-filtrar">
            <option value="value0">TODOS</option>
            <option value="juguetes">Juguetes</option>
            <option value="higiene">Higiene</option>
            <option value="camas">Camas</option>
            <option value="elementos de paseo">Elementos de paseo</option>
        </select>

    )

}

export default Filter;