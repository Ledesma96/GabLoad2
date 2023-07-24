import React from 'react'
import Form from './Form'

export const metadata = {
  title: 'GabLoad-Contact',
  description: '¡Contáctame para llevar tu proyecto web al siguiente nivel! En la sección de contacto de mi sitio web de desarrollo web, podrás conectarte directamente conmigo para discutir tus ideas, requerimientos y objetivos. Ya sea que necesites un nuevo sitio web, mejoras en el diseño o funcionalidades personalizadas, estoy aquí para ayudarte. Juntos podemos crear una presencia en línea impactante y eficiente. ¡No dudes en completar el formulario de contacto o utilizar los datos de contacto proporcionados y estaré encantado de responder a tus consultas y comenzar a trabajar en tu proyecto web de ensueño!',
  keywords:"Contacto, Formulario de contacto, Consulta, Información de contacto, Comunicación, Solicitar presupuesto, Contacto directo, Mensaje de contacto, Soporte técnico, Interacción, Comunicarse con nosotros, Consultas de clientes, Contacto profesional, Envío de mensajes, Contacto personalizado"
}



const page = () => {
  
  return (
    <div className='contact'>
      <Form></Form>
    </div>
  )
}

export default page