import React from "react";

function Filter(props) {
    const filterProducts = (e) => {
        const producFiltr = props.cart.filter((product) =>
            product.category === e.target.value)
        props.setfiltros(producFiltr)
    }

    return (
        <div className="form-group ">
            <select onChange={(e) => filterProducts(e)} className="btn btn-outline boton-filtrar">
                <option value="value0">TODOS</option>
                <option value="juguetes">Juguetes</option>
                <option value="higiene">Higiene</option>
                <option value="camas">Camas</option>
                <option value="elementos de paseo">Elementos de paseo</option>
            </select>
        </div>
    )

}

export default Filter;