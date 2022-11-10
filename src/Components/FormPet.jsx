import React from 'react';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';


function FormPet() {

    const [datos, setDatos] = useState({
        nombreCompleto: '',
        dni: '',
        nombreMascota: '',
        provincia: '',
        servicio: '-',
        observaciones: '',
        sexo: '',
        tamaño: '',
        whatsapp: '',
    })
    const InputChange = (e) => {
        console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const Swal = require('sweetalert2')
    const onSubmit = () => {
        if (!datos.nombreCompleto.trim()) {
            Swal.fire({
                title: 'Error!',
                text: 'Error, debe completar todos los campos',
                icon: 'error',
            })
        } else {
            console.log(datos)
            Swal.fire({
                title: 'Exito!',
                text: 'Los datos fueron enviados correctamente. Pronto recibirá un Email con la fecha y horario de su turno (por favor revise su correo). ¡MUCHAS GRACIAS!',
                icon: 'success',
            })
            setDatos({})
        }
    }
    return (
        <Fragment>
            <Header />
            <div className="container mt-5">
                <div className='conteiner'>
                    <h1 className='form-contact'>
                        Agenda un turno  <FontAwesomeIcon icon={faDog} />
                    </h1>
                </div>
                <form onSubmit={onSubmit} className="form-1">
                    <h4 className='fst-normal text-secondary'>Tus datos</h4>
                    <div className="cold-md-3">
                        <input
                            type="texto"
                            placeholder="Nombre Completo *"
                            className="form-control"
                            name="nombreCompleto"
                            onChange={InputChange}
                            value={datos.nombreCompleto}
                        />
                    </div>
                    <div className="cold-md-3">
                        <input
                            type="texto"
                            placeholder="DNI "
                            className="form-control"
                            name="dni"
                            onChange={InputChange}
                            value={datos.dni}
                        />
                    </div>
                    <div className="cold-md-3">
                        <input
                            type="texto"
                            placeholder="Whatsapp "
                            className="form-control"
                            name="whatsapp"
                            onChange={InputChange}
                            value={datos.whatsapp}
                        />
                    </div>
                    <div className="cold-md-3">
                    </div>
                    <div className="cold-md-3">
                        <input
                            type="texto"
                            placeholder="Provincia "
                            className="form-control"
                            name="provincia"
                            onChange={InputChange}
                            value={datos.provincia}
                        />
                    </div>
                    <h4 className='fst-normal text-secondary'> Datos de la mascota </h4>
                    <div className="cold-md-3">
                        <input

                            type="texto"
                            placeholder="Nombre *"
                            className="form-control"
                            name="nombreMascota"
                            onChange={InputChange}
                            value={datos.nombreMascota}
                        />
                    </div>
                    <p>Sexo *</p>
                    <div>
                        <select
                            className="form-control"
                            name="sexo"
                            onChange={InputChange}
                            value={datos.sexo}
                        >
                            <option value="value0">-</option>
                            <option value="En la tienda física">Hembra</option>
                            <option value="En la página web">Macho</option>

                        </select>
                        <p>Tamaño *</p>
                        <select
                            className="form-control"
                            name="tamaño"
                            onChange={InputChange}
                            value={datos.tamaño}
                        >
                            <option value="value0">-</option>
                            <option value="Pequeño">Pequeño</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Grande">Grande</option>
                        </select>

                        <h4 className='fst-normals text-secondary'>Datos adicionales</h4>
                        <p>Servicio *</p>
                        <select
                            className="form-control"
                            name="servicio"
                            onChange={InputChange}
                            value={datos.servicio}
                        >
                            <option value="value0">-</option>
                            <option value="domicilio">Busqueda en domicilio</option>
                            <option value="sucursal">En la sucursal</option>

                        </select>

                    </div>
                    <p>Indique si tiene alergias o padece alguna enfermedad... *</p>
                    <textarea
                        className="form-control"
                        onChange={InputChange}
                        name='observaciones'
                        value={datos.observaciones}
                    >
                    </textarea>
                    <div className="cold-md-3">
                        <button className="btn btn-enviarform"
                            type="submit"> Enviar </button>
                    </div>

                </form>

            </div>
        </Fragment>

    );
}

export default FormPet;