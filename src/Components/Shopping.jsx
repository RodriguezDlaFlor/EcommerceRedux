
import React, { Fragment, useState } from "react";
import "../styles/Product.css";
import "../styles/Shopping.css";
import "../styles/Modal.css";
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseCart, deleteProduct, finalizeCart, increaseCart } from "../Slices/SliceShopping";

function Shopping() {

    const dispach = useDispatch()
    const { cart } = useSelector(state => state.shopping)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const total = cart.reduce((accumulator, element) => accumulator + parseInt(element.price * element.amount), 0)

    return (

        <Fragment>

            <Link type="button" className="navbar-brand link-carrito" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="my-button-id " onClick={handleShow}>
                Mi Carrito {cart.length ? <small>{ }</small> : ''}
            </Link>

            <Offcanvas show={show} size="lg" onHide={handleClose} backdrop="static"
                keyboard={true} >
                <Offcanvas.Header closeButton={handleClose} show={show}>
                    <Offcanvas.Title>
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Mi Carrito</h1>
                    </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.length ? <div className="row  g-12">{cart.map((element, key) =>
                        <div className="js-cart-item cart-item form-row" id={key}>

                            <div className="cart-item-name">
                                <small className="small">{element.name}</small>

                            </div>

                            <div className="col-10">

                                <span className="pull-left">
                                    <button type="button" className="js-cart-quantity-btn cart-item-btn btn" id={element.id} onClick={() => dispach(increaseCart(element))}>
                                        +
                                    </button>
                                    <span>
                                        {element.amount}
                                    </span>

                                    <button type="button" className="js-cart-quantity-btn cart-item-btn btn" id={element.id} onClick={() => dispach(decreaseCart(element))}>
                                        -
                                    </button>
                                </span>
                                <button type="button" className="btn btn-deleteproduct" id={element.id}>
                                    <span class="material-symbols-outlined" id={element.id} onClick={() => dispach(deleteProduct(element))}>
                                        Eliminar
                                    </span>
                                </button>
                                <h6 className="js-cart-item-subtotal" data-line-item-id={element.id}>${element.price},00</h6>
                                <div className="col-1 cart-item-delete text-right">
                                    <button type="button" className="btn">
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}</div>
                        : <small >  El carrito de compras está vacío. </small>}

                    {cart.length ? <div className="row  g-12">

                        <h5 className="js-visible-on-cart-filled">
                            <span className="col">
                                Subtotal

                                <small className="envio"> (sin envío)</small >

                            </span >
                            <strong className="js-ajax-cart-total js-cart-subtotal {% if not cart_page %}col{% endif %} text-right">${total},00</strong>
                        </h5 >



                        <Offcanvas.Body>
                            <div className="js-cart-total-container js-visible-on-cart-filled mb-3 display:none">
                                <h2 className="{% if not cart_page %}row{% else %}text-right{% endif %} text-primary mb-0">
                                    <span className="col-total">${total},00</span>
                                </h2>
                            </div>
                        </Offcanvas.Body>
                        <div className="js-ajax-cart-submit row mb-3 display:none" id="ajax-cart-submit-div">
                            <button class="btn btn-primary btn-block" type="button" name="go_to_checkout" onClick={() => dispach(clearCart())}> Limpiar </button>
                        </div>
                        <div className="js-ajax-cart-submit row mb-3 display:none" id="ajax-cart-submit-div">
                            <button class="btn btn-primary btn-block" type="button" name="go_to_checkout" onClick={() => dispach(finalizeCart())}> Comprar</button>
                        </div>


                        <div className="row mb-2">
                            <div className="text-center w-100">
                                <a href="/Products" className="js-modal-close btn btn-link">Seguir comprando </a>
                            </div>
                        </div>


                    </div> : ''} <Button variant="secondary" onClick={handleClose} >
                        Cerrar
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>

    );

}



export default Shopping;