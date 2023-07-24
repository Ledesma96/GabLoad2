"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react"


const Pricing = () => {
  const [vermas, setVermas] = useState(false);
  const [height, setHeight] = useState("370px");
  const [vermas2, setVermas2] = useState(false);
  const [height2, setHeight2] = useState("370px");
  const [vermas3, setVermas3] = useState(false);
  const [height3, setHeight3] = useState("370px");
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!vermas) {
        ref.current.style.overflow = "hidden";
      }
    }, 500); // Duración de la animación de altura en milisegundos

    return () => clearTimeout(timeout);
  }, [vermas]);

  const handleClick = () =>{
    if(vermas){
      setHeight("400px")
    } else {
      setHeight("720px")
    }
    setVermas(!vermas)
   }

  const style = {
    height,
    transition: "height 0.8s ease"
  }




  useEffect(() => {
    const timeout2 = setTimeout(() => {
      if (!vermas2) {
        ref2.current.style.overflow = "hidden";
      }
    }, 500); // Duración de la animación de altura en milisegundos

    return () => clearTimeout(timeout2);
  }, [vermas2]);

  const handleClick2 = () =>{
    if(vermas2){
      setHeight2("390px")
    } else {
      setHeight2("720px")
    }
    setVermas2(!vermas2)
   }

  const style2 = {
    height: height2,
    transition: "height 0.8s ease"
  }



  useEffect(() => {
    const timeout3 = setTimeout(() => {
      if (!vermas3) {
        ref3.current.style.overflow = "hidden";
      }
    }, 500); // Duración de la animación de altura en milisegundos

    return () => clearTimeout(timeout3);
  }, [vermas3]);

  const handleClick3 = () =>{
    if(vermas3){
      setHeight3("400px")
    } else {
      setHeight3("720px")
    }
    setVermas3(!vermas3)
   }

  const style3 = {
    height: height3,
    transition: "height 0.8s ease"
  }

  
    
  return (
    <div className='container my-24 px-6 mx-auto' id='pricing'>
  <section className ="mb-32 text-gray-800">
    <div id="pricing-block-5" class ="background-radial-gradient text-center text-white">
      <h2 className= "text-3xl font-bold text-center mb-12">Planes</h2>
    </div>
    <div className =" uno grid lg:grid-cols-3 px-6 md:px-12 xl:px-32" >
      <div className ="p-0 py-12 pricing1" >
        <div className ="block rounded-lg shadow-lg bg-white h-full lg:rounded-tr-none lg:rounded-br-none" ref={ref} style={style}>
          <div className ="p-6 border-b border-gray-300 text-center">
            <p className ="uppercase mb-4 text-sm">
              <strong>Basic</strong>
            </p>
            <Link href="https://api.whatsapp.com/send?phone=5491123597015&text=Estoy interesada/o en el plan basic" target="blank">
            <button type="button"
              className =" dos inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
               data-mdb-ripple="true" data-ripple-color="primary">
              Consultanos
            </button>
            </Link>
          </div>
          <div className ="p-6">
          <ol className ="list-inside">
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>4 paginas
              </li>
              <li className ="mb-4 flex items-center">
              <svg className="nope" color='red' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>Catalogo de productos
              </li>
              <li className ="mb-4 flex items-center">
              <svg className="nope" color='red' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>Categorias
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" width="26" height="26" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Pagina de contacto
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" width="26" height="26" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Hosting gratis por 6 meses</p>
              </li>
              <li className ="mb-4 flex items-center">
              <svg className="nope" color='red'  width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg><p className="svg__p">Certificado de Sitio Seguro (SSL)</p>
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" width="26" height="26" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Compatible con todos los dispositivos</p>
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" width="26" height="26" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Formulario de contacto
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" width="36" height="36" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Enlaces directos a redes sociales</p>
              </li>
              <li className ="mb-4 flex items-center">
              <svg className="nope" color='red' xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>Botón flotante de WhatsApp
              </li>
            </ol>
          </div> 
        </div>
        {vermas ? <button className="vermasPricing" onClick={handleClick}>Ocultar</button> : <button className="vermasPricing" onClick={handleClick}>Mostrar</button> }
      </div>
      <div className ="p-0 pricing2">
        <div className ="block rounded-lg shadow-lg bg-white h-full z-10" ref={ref2} style={style2}>
          <div className ="p-6 border-b border-gray-300 text-center">
            <p className ="uppercase mb-4 text-sm">
              <strong>Enterprise</strong>
            </p>
            <Link href="https://api.whatsapp.com/send?phone=5491123597015&text=Estoy interesada/o en el plan enterprise" target="blank">
              <button type="button"
              className ="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
              Consultanos
              </button>
            </Link>
          </div>
          <div className ="p-6">
            <ol className ="list-inside">
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" width="26" height="26"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>5 paginas
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Catalogo de productos
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Categorias
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Pagina de contacto
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Hosting gratis por 6 meses
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Certificado de Sitio Seguro (SSL)</p>
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  class ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Compatible con todos los dispositivos</p>
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Formulario de contacto
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Enlaces directos a redes sociales</p>
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Botón flotante de WhatsApp</p>
              </li>
            </ol>
          </div>
        </div>
        {vermas2 ? <button className="vermasPricing" onClick={handleClick2}>Ocultar</button>: <button className="vermasPricing" onClick={handleClick2}>Mostrar</button> }
      </div>
      <div className="p-0 py-12 pricing3">
        <div className="block rounded-lg shadow-lg bg-white h-full lg:rounded-tl-none lg:rounded-bl-none" ref={ref3} style={style3}>
          <div className="p-6 border-b border-gray-300 text-center">
            <p className="uppercase mb-4 text-sm">
              <strong>Advanced</strong>
            </p>
            <Link href="https://api.whatsapp.com/send?phone=5491123597015&text=Estoy interesada/o en el plan advance" target="blank">
              <button type="button"
              className="dos inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true" data-ripple-color="primary">
              Consultanos
              </button>
            </Link>
          </div>
          <div className="p-6">
          <ol className ="list-inside">
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>4 paginas
              </li>
              <li className ="mb-4 flex items-center">
              <svg className="nope" color='red' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>Catalogo de productos
              </li>
              <li className ="mb-4 flex items-center">
              <svg  className="nope" color='red' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>Categorias
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Pagina de contacto
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Hosting gratis por 6 meses
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Certificado de Sitio Seguro (SSL)</p>
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  class ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Compatible con todos los dispositivos</p>
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>Formulario de contacto
              </li>
              <li className ="mb-4 flex items-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                  className ="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg><p className="svg__p">Enlaces directos a redes sociales</p>
              </li>
              <li className ="mb-4 flex items-center">
              <svg className="nope" color='red' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg><p className="svg__p">Botón flotante de WhatsApp</p>
              </li>
            </ol>
          </div>
        </div>
        
        {vermas3 ? <button className="vermasPricing" onClick={handleClick3}>Ocultar</button> : <button className="vermasPricing" onClick={handleClick3}>Mostrar</button>}
      </div>
    </div>
  </section>

</div>
  )
}

export default Pricing