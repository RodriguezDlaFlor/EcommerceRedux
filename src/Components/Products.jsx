import { Fragment } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../Slices/SliceShopping"
import "../styles/Buttons.css";

function Products({ article, setSizes, sizes }) {

    const dispach = useDispatch()

    return (
        <Fragment>
            <div className="tarjeta" >
                <div className="card text-bg-dark mb-3">
                    <div className="card-header text-center">{article.name}</div>
                    <img
                        className="card-img-top"
                        src={require(`../image/${article.image}`)}
                        alt="imagen de bandeja" />
                    <div className="card-body">
                        <h5 className="card-title text-center">${article.price},00</h5>
                        <p className="card-text"></p>
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

