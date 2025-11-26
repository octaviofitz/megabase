import React from 'react';

import comercial from '../../IMG/Index/Servicios/comercial.webp';
import viviendas from '../../IMG/Index/Servicios/viviendas.webp';
import diseño from '../../IMG/Index/Servicios/diseño.webp';
import reformas from '../../IMG/Index/Servicios/reformas.webp';

import './serviciosDesktop.css';

function ServiciosDesktop() {
    return (
        <section className='serviciosDesktop'>

            <div className='containerCards'>

                <div className='card'>
                    <img className='img' alt='' src={viviendas} />
                    <h5 className='titulo'>Construcción de Viviendas (Llave en Mano)</h5>
                    <p className='texto'>Hacemos realidad el hogar de tus sueños. Ofrecemos dos modalidades principales, combinando la mejor relación entre tiempo, costo y durabilidad.</p>
                </div>

                <div className='card'>
                    <img className='img' alt='' src={comercial} />
                    <h5 className='titulo'>Construcción Industrial y Comercial</h5>
                    <p className='texto'>Proyectos a gran escala para empresas. Construcción de oficinas corporativas, edificios residenciales, naves industriales y galpones con métodos húmedos industriales (hormigón armado, estructuras metálicas). Cumplimos con las normativas más exigentes.</p>
                </div>

                <div className='card'>
                    <img className='img' alt='' src={diseño} />
                    <h5 className='titulo'>Diseño y Planificación de Proyectos</h5>
                    <p className='texto'>Nuestro equipo de arquitectos e ingenieros diseña proyectos desde cero. Te acompañamos desde la conceptualización hasta la entrega final, optimizando espacios, costos y funcionalidad. Diseñamos proyectos únicos a medida de cada cliente.</p>
                </div>

                <div className='card'>
                    <img className='img' alt='' src={reformas} />
                    <h5 className='titulo'>Reformas y Ampliaciones</h5>
                    <p className='texto'>Mejoramos tu espacio actual. Especialistas en refacciones integrales, ampliaciones de viviendas y reconversión de espacios comerciales.</p>
                </div>

            </div>
        </section>
    );
}

export default ServiciosDesktop;