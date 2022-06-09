import React, { Fragment } from 'react';


const PrimeraApp = (props) => {

    const saludo = 'Hola Mundo';

    console.log(props);

    return (
        <>
            <h1> {saludo} </h1>
            <p>Mi primera aplicacion</p>
        </>
    );

}

export default PrimeraApp;