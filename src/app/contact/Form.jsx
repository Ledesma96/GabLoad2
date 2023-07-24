"use client"
import { useEffect, useRef, useState } from "react"
import firebaseApp from "../../../firebase"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import Swal from "sweetalert2"
import firebase from "../../../firebase"
import { getAnalytics, logEvent } from "firebase/analytics"



const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] =  useState("");
  const [numberTel, setNumberTel] = useState("");
  const [message, setMessage] = useState("");
  const date = new Date();
  const [namee, setNamee] = useState(false)
  const [emaiil, setEmaiil] = useState(false)
  const [numberTeel, setNumberTeel] = useState(false)
  const [messagee, setMessagee] = useState(false)

  const analytics = getAnalytics()
  useEffect(() => {
    logEvent(analytics, "componente montado")
    
    return () => {
      logEvent(analytics, "componente desmontado")
    }
  }, [])

  const handleSubmmit = (e) =>{
    e.preventDefault()
  }

  const db = getFirestore();

  const sendMessage = () => {
    const meessage = {
      name: name,
      email: email,
      numberTelephone: numberTel,
      message: message,
      fecha: date
    }
    const messageCollection = collection(db, "mensajes")
    if (name === "") {
      setNamee(true);
    } else {
      setNamee(false);
    }
    
    if (email === "") {
      setEmaiil(true);
    } else {
      setEmaiil(false);
    }
    
    if (numberTel === "") {
      setNumberTeel(true);
    } else {
      setNumberTeel(false);
    }
    
    if (message === "") {
      setMessagee(true);
    } else {
      setMessagee(false);
    }

      if ( name == "" || numberTel == "" || email == "" || message == ""){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Algunos campos estan sin completar '
        })
      } else {
        addDoc(messageCollection, meessage).then(({id}) => {
          setMessage(id)
        })
        setTimeout(() => {
          form.current.reset();
          setName("");
          setEmail("");
          setNumberTel("");
          setMessage("");
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Recibimos tu contacto correctamente'
          })
          
        }, 1000)
        
        logEvent(analytics, "submit_form:", {form_name:"formulario de contacto"} )
      }
  }

  return (
    <>
    <div className='contact__div'>
        <h1 className='contact__div__h1'>CONTÁCTANOS</h1>
        <p className='contact__div__p'> Hacenos tu consulta o pedinos un presupuesto.</p>
      </div>
    <main className='contact__main'>
        <form className='contact__main__form' action="" ref={form} onSubmit={handleSubmmit}>
          <input onChange={(e) => {setName(e.target.value)}} className='contact__main__form__input' type="text" placeholder='Nombre y Apellido'/>
          {!namee ? <></> :
          <div className="input__error">
            <svg color="red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
            <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
          </svg>
          <p className="input__error__p">Este campo es obligatorio</p>
          </div>}
          <input onChange={(e) => {setEmail(e.target.value)}} className='contact__main__form__input' type="email" placeholder='Email'/>
          {!emaiil ? <></> : 
          <div className="input__error">
            <svg color="red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
            <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
          </svg>
          <p className="input__error__p">Este campo es obligatorio</p>
          </div>}
          <input onChange={(e) => {setNumberTel(e.target.value)}} className='contact__main__form__input' type="number" placeholder='Telefono'/>
          {!numberTeel ? <></> :
          <div className="input__error">
            <svg color="red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
            <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
          </svg>
          <p className="input__error__p">Este campo es obligatorio</p>
          </div>}
          <textarea onChange={(e) => {setMessage(e.target.value)}} className='contact__main__form__message' name="" id="" cols="30" rows="10" placeholder='Contanos tu idea'></textarea>
          {messagee ? <div className="input__error">
            <svg color="red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
            <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
          </svg>
          <p className="input__error__p">Este campo es obligatorio</p>
          </div> : <></>
          }
          <button onClick={sendMessage} className='contact__main__form__send'>
            <svg className='p-1.5' color='white' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg><p className='p-1.5'>ENVIAR</p>
          </button>
        </form>
      </main>
      <section className='contact__section'>
      <div className='contact__section__div'>
        <svg color='white' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"  viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
          <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
        </svg>
        <p className='contact__section__div__p'>Buenos Aires - Argentina</p>
      </div>
      <div className='contact__section__div'>
        <svg color='white' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
          <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
        </svg>
        <p className='contact__section__div__p'>gabloadweb@gmail.com</p>
      </div>
      <div className='contact__section__div'>
        <svg color='white' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"  viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
        <p className='contact__section__div__p'>+54 9 11-2359-7015</p>
      </div>
    </section>
    </>
  )
}

export default Form