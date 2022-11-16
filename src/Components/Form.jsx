import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";


function Form() {
    const [datos, setDatos] = useState({
        nombre: '',
        direccion: '',
        provincia: '',
        email: '',
        consulta: ''
    })
    const InputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Exito!',
            text: 'Formulario enviado!',
            icon: 'success',

        })
        localStorage.setItem('dataContact', JSON.stringify(datos))
        setDatos({})
    }
    return (
        <Fragment>
            <div className="container mt-5">
                <h1 className="form-contact text-center">Contacto<ion-icon name="h5ppy-outline"></ion-icon></h1>
                <form onSubmit={onSubmit} className="form-1">
                    <div className="cold-md-3">
                        <input
                            type="texto"
                            placeholder="Nombre Completo *"
                            className="form-control"
                            name="nombre"
                            onChange={InputChange}
                            value={datos.nombre}
                            required
                            minLength='3'
                        />
                    </div>
                    <div className="cold-md-3">
                        <input
                            type="email"
                            placeholder="Email *"
                            className="form-control"
                            name="email"
                            onChange={InputChange}
                            value={datos.email}
                            required
                            minLength='10'
                        />
                    </div>
                    <div className="cold-md-3">
                        <input
                            type="texto"
                            placeholder="Direccion "
                            className="form-control"
                            name="direccion"
                            onChange={InputChange}
                            value={datos.direccion}
                            required
                            minLength='10'
                        />
                    </div>
                    <div className="cold-md-3">
                        <input
                            type="texto"
                            placeholder="Provincia"
                            className="form-control"
                            name="provincia"
                            onChange={InputChange}
                            value={datos.provincia}
                        />
                    </div>
                    <p>¿Cuál es tu consulta? <ion-icon name="arrow-down-outline"></ion-icon>
                    </p>
                    <textarea
                        className="form-control"
                        onChange={InputChange}
                        name='consulta'
                        value={datos.consulta}
                        required
                        minLength='10'                    >
                    </textarea>
                    <div className="cold-md-3">
                        <button className="btn btn-enviarform "
                            type="submit"> Enviar </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Form; 