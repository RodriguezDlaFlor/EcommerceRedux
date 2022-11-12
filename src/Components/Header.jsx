import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Shopping from "./Shopping";


function Header({ results, setResults, sizes }) {
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
          <button onClick={clearStorage} className="navbar-btn">Cerrar Sesión
          </button>
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

          <Search setResults={setResults} results={results} />

          <Shopping sizes={sizes} />
        </div>
      </nav>
    </Fragment>
  )
}
export default Header;

