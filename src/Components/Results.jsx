import React, { Fragment } from "react";
import "../styles/Product.css"
import "../styles/Buttons.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/SliceShopping";
import Header from "./Header";
import Search from "./Search";

function Results(props) {
    const dispach = useDispatch()



    return (
        <Fragment>
            <div>


                <br />
                <div className="row row-cols-1 row-cols-md-4 g-4 ">


                    <div >
                        <div className="tarjeta" >
                            <div className="card text-bg-dark mb-3">
                                <div className="card-header">{props.name}</div>
                                <img
                                    className="card-img-top"
                                    src={require(`../image/${props.image}`)}
                                    alt="imagen de bandeja" />
                                <div className="card-body">
                                    <h5 className="card-title">${props.price},00</h5>
                                    <p className="card-text"></p>
                                    {props.size ?
                                        <select
                                            className="form-control"
                                            name="size"

                                            id={props.id}
                                        >
                                            <option value="Color">Talle</option>
                                            <option value="S">{props.size[0]}</option>
                                            <option value="M">{props.size[1]}</option>
                                            <option value="G">{props.size[2]}</option>
                                        </select> : ''}
                                    <button
                                        onClick={() => dispach(addToCart(props))}
                                        className='btn boton-comprar'
                                    >AGREGAR<span class="material-symbols-outlined icon-agregar">

                                        </span></button>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </Fragment>
    );
}

export default Results;