import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";


function Form() {

    const [datos, setDatos] = useState({
        nombre: '',
        direccion: '',
        provincia: '',
        email: '',
        select: '-',
        sugerencia: ''
    })
    const InputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        Swal.fire({
            title: 'Exito!',
            text: 'Formulario enviado!',
            icon: 'success',
        })
        setDatos({})
    }
    return (
        <Fragment>
            <div className="container mt-5">
                <h1 className="form-contact"><ion-icon name="h5ppy-outline"></ion-icon></h1>
                <form onSubmit={onSubmit} className="form-1">
                    <div className="cold-md-3">
                        <input

                            type="texto"
                            placeholder="Nombre Completo *"
                            className="form-control"
                            name="nombre"
                            onChange={InputChange}
                            value={datos.nombre}
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
                    <p>¿Por dónde prefieres comprar? </p>
                    <div className="div-cold-md-3">
                        <select
                            className="form-control"
                            name="select"
                            onChange={InputChange}
                            value={datos.select}
                        >
                            <option value="value0">-</option>
                            <option value="En la tienda física">En la tienda física</option>
                            <option value="En la página web">En la página web</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <p>¿Tienes alguna sugerencia? <ion-icon name="arrow-down-outline"></ion-icon>
                    </p>
                    <textarea
                        className="form-control"
                        onChange={InputChange}
                        name='sugerencia'
                        value={datos.sugerencia}
                    >
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