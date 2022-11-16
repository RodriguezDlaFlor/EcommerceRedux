
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

function Search({ setResults }) {
    const { allarticles } = useSelector(state => state.products)
    const onSubmit = (e) => {
        e.preventDefault()
    }
    const filterResults = ("keyup", function (e) {
        let texto = e.target.value
        const name = texto.toUpperCase()

        if (texto !== '' && texto.length > 3) {
            const textShow = allarticles.filter((article) =>
                article.name.includes(name))
            setResults(textShow)
            if (textShow.length === 0) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 650,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'err',
                    title: 'No hay resultados'
                })
            }
        } else {
            setResults([])
        }
    }
    )

    return (
        <Fragment>
            <form className="d-flex" role="search" onSubmit={onSubmit}>
                <input className="form-control me-2" type="search" aria-label="Search" required minLength='4'
                    onKeyUp={filterResults}
                    name='name'
                    placeholder='¿Qué estás buscando?'
                />
            </form>
        </Fragment>
    )
}

export default Search;