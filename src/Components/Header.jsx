import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Shopping from "./Shopping";

function Header(props) {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className='btn-group'>
          <Link to='/Inicio' className="navbar-brand" >
            Inicio
          </Link>
          <Link to='/Products' className="navbar-brand" >
            Productos
          </Link>

          <Shopping show={props.show} handleShow={props.handleShow} handleClose={props.handleClose} cart={props.cart}
            setCart={props.setCart} article={props.articles} sizes={props.sizes}
          />


        </div>
      </nav>
    </Fragment>
  )
}
export default Header;

