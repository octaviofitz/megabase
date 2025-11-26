import React from 'react';

import patagonia from '../../IMG/Index/Proyectos/patagonia.jpg';
import alamo from '../../IMG/Index/Proyectos/alamo.jpg';

import './portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio' id='portfolio'>
            <h4 className='titulo'>Muestras de Nuestra Trayectoria</h4>
            <p className='subtitulo'>La mejor prueba de nuestra <strong>calidad</strong> es el trabajo que hemos entregado.</p>

            <div className='containerCard'>

            <article className='card1'>
            <h5 className='titulo'>Proyecto de Construcción en Seco (Steel Frame)</h5>
            <p className='texto'>Obra con una superficie total de 150 m². El plazo estimado de ejecución es de 5 meses, empleando tecnología de construcción en seco para garantizar eficiencia, precisión y tiempos optimizados.</p>
            <img src={patagonia} alt='' className='img'/>
            </article>

            <article className='card2'>
            <h5 className='titulo'>Proyecto de Construcción Húmeda Industrial</h5>
            <p className='texto'>Con una superficie total de 4.500 m², destinado a oficinas de Clase A. La obra se ejecuta bajo estándares industriales, priorizando calidad estructural, eficiencia operativa y confort para espacios corporativos de alto nivel.</p>
            <img src={alamo} alt='' className='img'/>
            </article>

            </div>
            
        </section>
    );
}

export default Portfolio;