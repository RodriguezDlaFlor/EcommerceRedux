import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { finalizeCart } from '../../Slices/SliceShopping';



function Checkout({ checkout, setCheckout }) {

    const { cart } = useSelector(state => state.shopping)
    const dispach = useDispatch()
    const total = cart.reduce((accumulator, element) => accumulator + parseInt(element.price * element.amount), 0)
    const inputChange = (e) => {
        setCheckout({
            ...checkout,
            [e.target.name]: e.target.value
        })
    }


    return (
        <React.Fragment>
            <div className="container">
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="" alt="" width="72" height="72" />
                    <h2 className='text-center'>Formulario de pago</h2>
                    <p className="lead"> Patitas Consentidas</p>
                </div>
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <span className="text-orden">Orden</span>
                        {cart.map((product) => <ul className="list-group mb-3 sticky-top">

                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">{product.name}</h6>
                                    <small className="text-muted">Cantidad: {product.amount}</small>
                                    <br />
                                    <span className="text-muted">$ {product.price}</span>
                                </div>
                            </li>
                        </ul>)}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>${total}</strong>
                        </li>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Dirección de envío</h4>
                        <form className="needs-validation" onSubmit={(e) => dispach(finalizeCart(e.preventDefault()))}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="firstName">Nombre Completo</label>
                                    <input type="text" className="form-control"
                                        required
                                        minLength="4"
                                        id="firstName"
                                        name="firstName"
                                        value={checkout.firstName}
                                        onChange={inputChange}
                                    />
                                    <div className="invalid-feedback"> Valid first name is required. </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Apellido</label>
                                    <input type="text" className="form-control"
                                        required
                                        minLength="4"
                                        id="lastName"
                                        name="lastName"
                                        value={checkout.lastName}
                                        onChange={inputChange}
                                    />
                                    <div className="invalid-feedback"> Valid last name is required. </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="email">Email </label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" required
                                    name="email"
                                    value={checkout.email}
                                    onChange={inputChange} />
                                <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                            </div>
                            <div className="mb-3">
                                <label for="address">Direccíon</label>
                                <input type="text" className="form-control"
                                    required
                                    id="address1"
                                    name="address"
                                    value={checkout.address}
                                    onChange={inputChange} />
                                <div className="invalid-feedback"> Please enter your shipping address. </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label for="country">País</label>
                                    <input type="text" className="form-control"
                                        required
                                        id="country"
                                        name="country"
                                        value={checkout.country}
                                        onChange={inputChange} />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="state">Provincia</label>
                                    <input type="text" className="form-control"
                                        required
                                        id="state"
                                        name="state"
                                        value={checkout.state}
                                        onChange={inputChange} />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="zip">Código postal</label>
                                    <input type="text" className="form-control"
                                        id="zip"
                                        name="zip"
                                        required
                                        maxLength='4'
                                        value={checkout.zip}
                                        onChange={inputChange} />
                                    <div className="invalid-feedback" style={{ width: 100 }}> Zip code required. </div>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <hr className="mb-4" />
                            <h4 className="mb-3">Datos de la tarjeta</h4>
                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required="" />
                                    <label className="custom-control-label" for="credit">Tarjeta de crédito</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                    <label className="custom-control-label" for="debit">Tarjeta de débito</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                    <label className="custom-control-label" for="paypal">PayPal</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="cc-name">Nombre del titular</label>
                                    <input type="text" className="form-control"
                                        required
                                        id="cardName"
                                        name='nameTitular'
                                        value={checkout.nameTitular}
                                        onChange={inputChange} />
                                    <small className="text-muted">Nombre completo como se muestra en la tarjeta</small>
                                    <div className="invalid-feedback"> Name on card is required </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="cc-number">Número de la tarjeta</label>
                                    <input type="text" className="form-control"
                                        required
                                        id="cardNumber"
                                        name='numberCard'
                                        minLenght0='14'
                                        maxLength='16'
                                        value={checkout.numbersCard}
                                        onChange={inputChange} />
                                    <div className="invalid-feedback"> Credit card number is required </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label for="cc-expiration">Expiración</label>
                                    <input type="text" className="form-control"
                                        required
                                        id="expDate"
                                        label="Fecha de expiración"
                                        name='dataCaducidad'
                                        value={checkout.dataCaducidad}
                                        onChange={inputChange} />
                                    <div className="invalid-feedback"> Expiration date required </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="cc-cvv">CVV</label>
                                    <input type="text" className="form-control"
                                        required
                                        id="cvv"
                                        maxLength='4'
                                        minLenght='3'
                                        helperText="Últimos 3 dígitos de la tarjeta"
                                        name='cvv'
                                        value={checkout.cvv}
                                        onChange={inputChange} />
                                    <div className="invalid-feedback"> Security code required </div>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block" type="submit" href='/Products'>Continuar</button>
                        </form>
                    </div>
                </div>

            </div>
        </React.Fragment >
    );
}

export default Checkout;