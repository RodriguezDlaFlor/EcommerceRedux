
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../Slices/SliceShopping"
import Header from "./Header"
import "../styles/Buttons.css";

function Products() {

    const dispach = useDispatch()
    const { allarticles } = useSelector(state => state.products)



    return (
        <Fragment>

            <Header />
            <h2>Productos</h2>

            <br />
            <div className='row'>
                {allarticles.map((article, index) => {
                    return (


                        <div className="tarjeta" key={index}>
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
                                        >
                                            <option value="Color">Talle</option>
                                            <option value="S">{article.size[0]}</option>
                                            <option value="M">{article.size[1]}</option>
                                            <option value="G">{article.size[2]}</option>
                                        </select> : ''}
                                    <button
                                        onClick={() => dispach(addToCart(article))}
                                        className='btn boton-comprar'
                                    >AGREGAR<span class="material-symbols-outlined icon-agregar">

                                        </span></button>
                                </div>
                            </div>
                        </div>


                    )

                })}

            </div>

        </Fragment>


    )
}
export default Products;

