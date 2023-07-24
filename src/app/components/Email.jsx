"use client"
import { useRef, useState } from "react"
import firebaseApp from "../../../firebase"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import Swal from "sweetalert2"

export const Email = () => {
    const form = useRef();
    const [email, setEmail] = useState("");
    const date = new Date();

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const db = getFirestore();

    const sendMail = () => {
        const emaiil = {
            email: email,
            fefcha: date
        }
        const emailCollection = collection(db, "emails")
        if(email == ""){
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
                title: 'Error al enviar el formulario'
              })
        } else {
            addDoc(emailCollection, emaiil).then(({id}) =>{
                setEmail(id)
            })
            setTimeout(() => {
                form.current.reset(); 
                setEmail("")
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
                //   location.href= "/"
                }, 1000)
        }
    }
  return (
    <form ref={form} onSubmit={handleSubmit} className='footer__section__form'>
        <input onChange={(e) => {setEmail(e.target.value)}} className='footer__section__form__email' type='email' placeholder='Email'/>
        <input onClick={sendMail} className='footer__section__form__submit' type='submit' value="ENVIAR" />
    </form>
  )
}
