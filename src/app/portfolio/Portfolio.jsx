"use client"
import React, { useRef, useState } from 'react'
export const metadata = {
  title: 'GabLoad-Contact',
  description: 'Ante cualquier duda o consulta no dude en ponerse en contacto y le respondemos a la brevedad',
}



const page = () => {
  
  /*card 1*/
  const [vermas, setVermas] = useState (false);
  const [height, setHeight] = useState('0px');
  const [border, setBorder] = useState(false);
  const ref = useRef(null)

  const toggleVerMas = () => {
    if (vermas) {
      setHeight('0px'); // Altura inicial
      setBorder(false);
    } else {
      setBorder(true);
      setHeight("250px"); // Altura automática para mostrar todo el contenido
    }
    setVermas(!vermas);
  };

  const style = {
    height,
    width: border ? '350px' : '0%',
    borderTop: border ? '4px solid white' : 'none',
    marginTop: border ? "20px" : "0px",
    padding:"5px 15px",
    overflow: 'hidden',
    opacity: border ? "1" : "0",
    transition: 'height 0.3s ease, border-top 0.3s ease, width 0.5s ease, opacity 5s ease'
  };


  /*card 2*/
  const [vermas2, setVermas2] = useState(false);
  const [height2, setHeight2] = useState('0px');
  const [border2,setBorder2] = useState(false);
  const ref2 = useRef(null)

  const toggleVerMas2 = () => {
    if (vermas2) {
      setHeight2('0px'); // Altura inicial
      setBorder2(false);
    } else {
      setBorder2(true);
      setHeight2("230px"); // Altura automática para mostrar todo el contenido
    }
    setVermas2(!vermas2);
  };

  const style2 = {
    height: height2,
    width: border2 ? '350px' : '0px',
    borderTop: border2 ? '4px solid white' : 'none',
    marginTop: border2 ? "20px" : "0px",
    padding:"5px 15px",
    overflow: 'hidden',
    opacity: border2 ? "1" : "0",
    transition: 'height 0.3s ease, border-top 0.3s ease, width 0.5s ease, opacity 5s ease'
  };

  /*card 3*/
  const [vermas3, setVermas3] = useState(false);
  const [height3, setHeight3] = useState('0px');
  const [border3,setBorder3] = useState(false);
  const ref3 = useRef(null)

  const toggleVerMas3 = () => {
    if (vermas3) {
      setHeight3('0px'); // Altura inicial
      setBorder3(false);
    } else {
      setBorder3(true);
      setHeight3("200px"); // Altura automática para mostrar todo el contenido
    }
    setVermas3(!vermas3);
  };

  const style3 = {
    height: height3,
    width: border3 ? '350px' : '0px',
    borderTop: border3 ? '4px solid white' : 'none',
    marginTop: border3 ? "20px" : "0px",
    padding:"5px 15px",
    overflow: 'hidden',
    opacity: border3 ? "1" : "0",
    transition: 'height 0.3s ease, border-top 0.3s ease, width 0.5s ease, opacity 5s ease'
  };

  
  return (
    <div className='portfolio'>
      <h1 className='portfolio__h1'>Inspirate con nuestros trabajos</h1>
      <main className='portfolio__main'>
        <div className='card'>
          <a href="/portfolio/e-commerce">
            <div className='portfolio__main__div'>
              <h2 className='portfolio__main__div__h2'>E-Commerce</h2>
            </div>
          </a>
          <h2 className='portfolio__main__h2'>¿Para quién es?</h2>
          <p className='cardP' ref={ref} style={style}>
        Ideal para emprendedores y empresarios que desean expandir su presencia digital y superar las limitaciones geográficas de una tienda física. También es una excelente opción para iniciar un negocio en línea, ofreciendo una forma rápida y eficiente de vender productos o servicios. Además, al estar disponible las 24 horas del día, brinda la oportunidad de generar ventas en cualquier momento.
          </p>
          <button className='portfolio__main__vermas' onClick={toggleVerMas}>
          {vermas ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
        <div className='card'>
          <a href="/portfolio/servicios">
            <div className='portfolio__main__div2'>
              <h2 className='portfolio__main__div__h2'>Servicios</h2>
            </div>
          </a>
          <h2 className='portfolio__main__h2'>¿Para quién es?</h2>
          <p className='cardP' ref={ref2} style={style2}>
          Esencial para profesionales y empresas que desean expandir su presencia en línea y captar nuevos clientes. Para profesionales, la web muestra habilidades y experiencia, generando confianza. Para empresas, destaca su propuesta de valor y facilita la comunicación con interesados. En resumen, una web de servicios impulsa el crecimiento y éxito en el entorno digital.
          </p>
          <button className='portfolio__main__vermas' onClick={toggleVerMas2}>
          {vermas2 ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
        <div className='card'>
          <a href="/portfolio/landing-page">
            <div className='portfolio__main__div3'>
              <h2 className='portfolio__main__div__h2'>Lading page</h2>
            </div>
          </a>
          <h2 className='portfolio__main__h2'>¿Para quién es?</h2>
          <p className='cardP' ref={ref3} style={style3}>
          Ideal para convertir visitantes en clientes potenciales. Es perfecta para lanzar productos, promociones y eventos, captando la atención y motivando a la acción. Con una landing page efectiva, aumentarás la tasa de conversión y obtendrás resultados concretos en tu estrategia de marketing en línea.
          </p>
          <button className='portfolio__main__vermas' onClick={toggleVerMas3}>
            {vermas3 ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </main>
    </div>
  )
}

export default page