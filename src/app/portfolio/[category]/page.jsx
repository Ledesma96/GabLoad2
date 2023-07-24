const works = [{name: "ItanFlor", category:"servicios", image:"/Reg Hindley.jpg", url:"www.itanflor.com"}]

export const metadata = {
  title: 'GabLoad-Proyects',
  description: 'Explora una selección de mis proyectos de desarrollo web finalizados con éxito. Desde diseños atractivos hasta funcionalidades avanzadas, estos trabajos demuestran mi experiencia y pasión por el desarrollo web. Descubre ejemplos de sitios web modernos, intuitivos y responsivos que he creado para diversos clientes y sectores. Cada proyecto refleja un enfoque único y una atención meticulosa a los detalles, asegurando resultados impresionantes y satisfacción del cliente. Sumérgete en mi portafolio y descubre cómo mis habilidades y experiencia pueden hacer que tu visión digital se haga realidad.',
  keywords:"Desarrollo web, Sitios web, Proyectos terminados, Diseño web, Experiencia digital, Portafolio en línea, Desarrollador web profesional, Soluciones digitales, Programación web, Diseño responsivo, Desarrollo de aplicaciones web, Desarrollo frontend, Desarrollo backend, Experiencia de usuario, Portafolio de diseño interactivo"
}

export const categoria = ({params}) => {
  const {category} = params 
  const filterCategory = works.filter(work => work.category == category)
  return (
    <div className="category">
    {filterCategory.map((item) => {
      return(
        <div className="category__item">
          <h1 className="category__item__name">{item.name}</h1>
          <a href={ "https://" + item.url} target="blanck">
            <img className="category__item__img" src={item.image} alt="mokup de pagina web llamda itanflor en vista mobile, tablet y escritorio" />
          </a>
        </div>
      )
    })}
    </div>
  )
}

export default categoria