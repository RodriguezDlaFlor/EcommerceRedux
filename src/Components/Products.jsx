
import { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../Slices/SliceShopping"
import "../styles/Buttons.css";



function Products({ article, setSizes, sizes }) {

    const dispach = useDispatch()


    console.log(sizes)

    return (
        <Fragment>
            <div className="tarjeta" >
                <div className="card text-bg-dark mb-3">
                    <div className="card-header">{article.name}</div>
                    <img
                        className="card-img-top"
                        src={require(`../image/${article.image}`)}
                        alt="imagen de bandeja" />
                    <div className="card-body">
                        <h5 className="card-title">${article.price},00</h5>
                        <p className="card-text"></p>
                        {article.size ?
                            <select
                                className="form-control"
                                name="size"
                                id={article.id}
                                onChange={e => setSizes(...sizes, e.target.value)}
                            >
                                <option value="Color">Talle</option>
                                <option value="S">{article.size[0]}</option>
                                <option value="M">{article.size[1]}</option>
                                <option value="G">{article.size[2]}</option>
                            </select> : ''}
                        <button
                            onClick={(e) => dispach(addToCart(article, e))}
                            className='btn boton-comprar'
                        >AGREGAR<span class="material-symbols-outlined icon-agregar">
                            </span></button>
                    </div>
                </div>
            </div>

        </Fragment >
    )
}
export default Products;

