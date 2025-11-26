import React from 'react';
import { Button, Nav} from 'react-bootstrap';

import './banner.css';

function Banner() {
    return (
        <section className='banner'>
            <h1 className='titulo'>Megabass</h1>
                <h2 className='slogan'>Construyendo el Futuro. Tu Proyecto, Nuestra Excelencia</h2> 
                <Button
  href="#contacto"
  className="boton"
>
  SOLICITÁ TU PRESUPUESTO
</Button>        </section>
    );
}

export default Banner;