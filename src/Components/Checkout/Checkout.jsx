import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finalizeCart } from '../../Slices/SliceShopping';
import "../Checkout/Checkout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faInstitution, faShoppingCart, faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Checkout() {
    const [checkout, setCheckout] = React.useState([
        {
            firstName: "",
            address: "",
            lastName: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            nameTitular: "",
            numberCard: "",
            dateCaducidad: "",
            cvv: "",
            email: "",
            cardtype: "",
        },
    ]);

    const { cart } = useSelector(state => state.shopping)
    const dispach = useDispatch()

    const total = cart.reduce((accumulator, element) => accumulator + parseInt(element.price * element.amount), 0)
    const amount = cart.reduce((accumulator, element) => accumulator + parseInt(element.amount), 0)
    const inputChange = (e) => {
        setCheckout({
            ...checkout,
            [e.target.name]: e.target.value
        })


    }
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-75">
                    <div className="container shopping-container">
                        <form action="" className='form-1' onSubmit={(e) => dispach(finalizeCart(e.preventDefault(), checkout))}>
                            <img className="d-block mx-auto mb-4" src={require(`../Checkout/patita.jpg`)} alt="patita" width="72" height="72" />
                            <h2 className='text-center'>Formulario de pago</h2>
                            <div className="row">
                                <div className="col-50">
                                    <h3>Dirección de envío</h3>
                                    <label for="fname"><FontAwesomeIcon icon={faUser} /> Nombre completo</label>
                                    <input type="text" className='input-shopping'
                                        required
                                        minLength="4"
                                        id="firstName"
                                        name="firstName"
                                        value={checkout.firstName}
                                        onChange={inputChange} />
                                    <label for="email"><FontAwesomeIcon icon={faEnvelope} />Correo electrónico</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com" className='input-shopping' />
                                    <label for="adr"><FontAwesomeIcon icon={faAddressCard} /> Dirección</label>
                                    <input type="text" id="adr" required className='input-shopping'
                                        name="address"
                                        value={checkout.address}
                                        onChange={inputChange} />
                                    <label for="city"><FontAwesomeIcon icon={faInstitution} /> Pais</label>
                                    <input type="text" required className='input-shopping'
                                        id="country"
                                        name="country"
                                        value={checkout.country}
                                        onChange={inputChange} />
                                    <div className="row">
                                        <div className="col-50">
                                            <label for="state">Provincia</label>
                                            <input type="text" id="state" required className='input-shopping'
                                                name="state"
                                                value={checkout.state}
                                                onChange={inputChange} />
                                        </div>
                                        <div className="col-50">
                                            <label for="zip">Código Postal</label>
                                            <input type="text" id="zip" name="zip" className='input-shopping'
                                                required
                                                maxLength='4'
                                                value={checkout.zip}
                                                onChange={inputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-50">
                                    <h3>Pago</h3>
                                    <label for="fname">Tarjetas aceptadas</label>
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon={faInstitution} style={{ color: 'navy' }} />  <i className="fa fa-cc-visa" ></i>
                                        <FontAwesomeIcon icon={faInstitution} style={{ color: 'blue' }} /><i className="fa fa-cc-amex"></i>
                                        <FontAwesomeIcon icon={faInstitution} style={{ color: 'red' }} />  <i className="fa fa-cc-mastercard"></i>
                                        <FontAwesomeIcon icon={faInstitution} style={{ color: 'orange' }} />  <i className="fa fa-cc-discover"></i>
                                    </div>
                                    <label for="cname">Nombre del titular</label>
                                    <input type="text" id="cname" className='input-shopping' required
                                        name='nameTitular'
                                        value={checkout.nameTitular}
                                        onChange={inputChange} />
                                    <label for="ccnum">Número de tarjeta</label>
                                    <input type="text" id="ccnum" className='input-shopping' required
                                        name='numberCard'
                                        minLength='14'
                                        maxLength='16'
                                        value={checkout.numbersCard}
                                        onChange={inputChange} />
                                    <label for="expmonth">Fecha de vencimiento</label>
                                    <input type="text" id="expmonth" className='input-shopping' required
                                        label="Fecha de expiración"
                                        name='dataCaducidad'
                                        value={checkout.dataCaducidad}
                                        onChange={inputChange} />
                                    <div className="row">
                                        <div className="col-50">
                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" className='input-shopping'
                                                required
                                                maxLength='4'
                                                minLength='3'
                                                helperText="Últimos 3 dígitos de la tarjeta"
                                                name='cvv'
                                                value={checkout.cvv}
                                                onChange={inputChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block" type="submit" >Continuar</button>
                        </form>
                    </div>
                </div>
                <div className="col-25">
                    <div className="container shopping-container">
                        <h4>Carrito
                            <span className="price" >
                                <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'black' }} />
                                <b style={{ color: 'black' }}>{amount}</b>
                            </span>
                        </h4>
                        {cart.map((product, idx) =>
                            <p key={idx}>{product.name}({product.amount})<span className="price">${product.price}</span></p>
                        )}
                        <hr />
                        <p>Total <span className="price" style={{ color: 'black' }}><b>${total}</b></span></p>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Checkout;