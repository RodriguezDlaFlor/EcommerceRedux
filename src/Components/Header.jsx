import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";
import Shopping from "./Shopping";


function Header({ setFilter, setResults, }) {
  const tokenGet = localStorage.getItem('token')
  const userEmail = localStorage.getItem('userEmail')
  const navigate = useNavigate()
  const clearStorage = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className='btn-group'>
          {tokenGet ? < button onClick={clearStorage} className="navbar-btn">Cerrar Sesión
          </button> : ''}
          {!tokenGet ? <Link to='/' className="navbar-brand" >
            Ingresar
          </Link> : ''}
          <div className="navbar-brand user" >
            <FontAwesomeIcon icon={faUser} />
            {userEmail}
          </div>
          <Link to='/Products' className="navbar-brand" >
            Productos
          </Link>
          <Link to='/Form' className="navbar-brand" >
            Nosotros
          </Link>
          <Link to='/Turnos' className="navbar-brand" >
            Peluqueria
          </Link>
          <Filter setFilter={setFilter} />
          <Search setResults={setResults} />
          <Shopping />
        </div>
      </nav>
    </Fragment >
  )
}
export default Header;

