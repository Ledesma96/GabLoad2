import React from 'react'

const Work = () => {
  return (
    <>
        <section className='works'>
            <div className='works__div'>
                <img className='works__div__img'  src="/logo(3).png" width={70} alt="logo de gabload" />
                <aside className='works___div__aside'>
                    <div className='works___div__aside__div'>
                        <h3 className='works___div__aside__div__h3'>GabLoad</h3>
                        <img width={30} src="/Twitter-Verified-Badge-PNG-Transparent-Image.png" alt="Loogo de verificado" />
                        <p className='works___div__aside__div__p'>19 de junio del 2023</p>
                    </div>
                    <p className='works___div__aside__p'>Trabajo para <a href='https://www.itanflor.com/' target="blank"><span className='span'>www.itanflor.com</span></a></p>
                </aside>
            </div>
            <img className='work__img' src="Reg Hindley.jpg" alt="mokup de visstas en diferentes dispositivos(celular, tablet, pc)" />
        </section>
    </>
  )
}

export default Work