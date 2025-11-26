import React from 'react';

import Banner from '../Banner/Banner';
import Nosotros from '../Nosotros/Nosotros'
import Servicios from '../Servicios/Servicios';
import ServiciosDesktop from '../ServiciosDesktop/ServiciosDesktop';
import Portfolio from '../Portfolio/Portfolio';
import Contacto from '../Contacto/Contacto';

function Home() {
    return (
        <div>
            <Banner />
            <Nosotros />
            <Servicios />
            <ServiciosDesktop />
            <Portfolio />
            <Contacto />
        </div>
    );
}

export default Home;