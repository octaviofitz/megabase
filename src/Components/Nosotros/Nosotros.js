import React from 'react';

import integracion from '../../IMG/Index/Icons/integracion.png'
import sustentable from '../../IMG/Index/Icons/sustentable.png'
import transparencia from '../../IMG/Index/Icons/transparencia.png'


import './nosotros.css';

function Nosotros() {
    return (
        <section className='nosotros' id='nosotros'>
            <h2 className='titulo'>Nuestro Compromiso con la Excelencia</h2>
            <p className='texto'>Megabass nace de la pasión por la construcción y el compromiso de ofrecer soluciones habitacionales e industriales de la más alta calidad. Somos una empresa constructora integral que combina la <strong>experiencia de la construcción tradicional</strong> con la <strong>vanguardia de los sistemas constructivos modernos</strong> como la construcción en seco (Steel Frame, Wood Frame). <br></br>
            <strong>Nuestra Misión:</strong> Superar las expectativas de nuestros clientes, entregando proyectos a tiempo, dentro del presupuesto y con los estándares de calidad que nos definen.</p> <br></br>
            <p className='texto'><strong className='strong'>Valores fundamentales:</strong></p>
            {/* <ul>
                <li><strong>Integración: </strong>Diseñamos y construimos, garantizando una visión integral del proyecto de principio a fin.</li>
                <li><strong>Sostenibilidad: </strong>Fomentamos el uso de materiales y procesos que minimizan el impacto ambiental.</li>
                <li><strong>Transparencia: </strong>Comunicación clara y constante durante todas las etapas de la obra.</li>
                </ul> */}

            <div className='cards'>
                
                <div className='card'>
                    <div className='containerTitulo'>
                        <img src={integracion} alt='' className='img'/>
                        <h3 className='titulo'>Integración</h3>
                    </div>

                    <p className='texto'>Diseñamos y construimos, garantizando una visión integral del proyecto de principio a fin.</p>
                </div>

                <div className='card'>
                    <div className='containerTitulo'>
                    <img src={sustentable} alt='' className='img'/>
                        <h3 className='titulo'>Sostenibilidad</h3>
                    </div>
                    <p className='texto'>Fomentamos el uso de materiales y procesos que minimizan el impacto ambiental.</p>
                </div>

                <div className='card'>
                    <div className='containerTitulo'>
                    <img src={transparencia} alt='' className='img'/>
                        <h3 className='titulo'>Transparencia</h3>

                    </div>
                    <p className='texto'>Comunicación clara y constante durante todas las etapas de la obra.</p>
                </div>

            </div>
        </section>
    );
}

export default Nosotros;