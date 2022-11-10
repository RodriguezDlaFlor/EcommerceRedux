import React, { Fragment } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';


function Search({ setResults }) {



    const { allarticles } = useSelector(state => state.products)

    const onSubmit = (e) => {
        e.preventDefault()
    }
    const filterResults = ("keyup", function (e) {
        let texto = e.target.value.toUpperCase()
        const name = texto.toUpperCase()

        if (texto !== '' && texto.length > 3) {
            const textShow = allarticles.filter((article) =>
                article.name.includes(name))
            setResults(textShow)
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