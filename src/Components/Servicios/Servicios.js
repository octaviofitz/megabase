import React, { useState, useEffect } from "react";

import comercial from '../../IMG/Index/Servicios/comercial.webp';
import viviendas from '../../IMG/Index/Servicios/viviendas.webp';
import diseño from '../../IMG/Index/Servicios/diseño.webp';
import reformas from '../../IMG/Index/Servicios/reformas.webp';

import './servicios.css';

const slides = [
  { 
    id: 1, 
    image: viviendas, 
    title: "Construcción de Viviendas (Llave en Mano)", 
    text: "Hacemos realidad el hogar de tus sueños. Ofrecemos dos modalidades principales, combinando la mejor relación entre tiempo, costo y durabilidad." 
  },
  { 
    id: 2, 
    image: comercial, 
    title: "Construcción Industrial y Comercial", 
    text: "Proyectos a gran escala para empresas. Construcción de oficinas corporativas, edificios residenciales, naves industriales y galpones con métodos húmedos industriales (hormigón armado, estructuras metálicas). Cumplimos con las normativas más exigentes." 
  },
  { 
    id: 3, 
    image: diseño,    
    title: "Diseño y Planificación de Proyectos", 
    text: "Nuestro equipo de arquitectos e ingenieros diseña proyectos desde cero. Te acompañamos desde la conceptualización hasta la entrega final, optimizando espacios, costos y funcionalidad. Diseñamos proyectos únicos a medida de cada cliente." 
  },
  { 
    id: 4, 
    image: reformas,  
    title: "Reformas y Ampliaciones", 
    text: "Mejoramos tu espacio actual. Especialistas en refacciones integrales, ampliaciones de viviendas y reconversión de espacios comerciales." 
  }
];

function Servicios() {
  const [current, setCurrent] = useState(0);

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mc-container servicios">
      
      <div
        className="mc-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="mc-slide">
            <img
              src={slide.image}
              alt={slide.title}
              className="mc-image"
            />

            {/* Siempre visible */}
            <div className="mc-overlay">
              <h3 className="mc-title">{slide.title}</h3>
              <p className="mc-text">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        className="mc-arrow mc-arrow--left"
        onClick={handlePrev}
        aria-label="Anterior"
        type="button"
      >
        ‹
      </button>

      <button
        className="mc-arrow mc-arrow--right"
        onClick={handleNext}
        aria-label="Siguiente"
        type="button"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mc-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={"mc-dot" + (index === current ? " mc-dot--active" : "")}
            onClick={() => setCurrent(index)}
            aria-label={`Ver imagen ${index + 1}`}
            type="button"
          />
        ))}
      </div>

    </div>
  );
}

export default Servicios;
