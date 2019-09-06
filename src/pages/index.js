import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import "./index.css"
import "./mystyles.scss"
const IndexPage = () => (
  <Layout>
    <section className="hero  is-large is-bold " id="mainhero">
  <div className="hero-body">
    <div class="container">
      <h1 class="title">
        ¿No sabe que hacer con su vida? Pruebe ser Ingeniero Catastral
      </h1>
      <h2 class="subtitle">
        Revise esta carrera, que segun el gobierno no existe (a pesar de que ellos la financian)
      </h2>
    </div>
  </div>
</section>
<section className="section is-light">
    <div class="container">
      <h1 class="title">Miles  de (bueno, como 10) Opciones</h1>
      <h2 class="subtitle">
       Puede ser Avaluador, Experto en SIG, Fotogrametra, Hacer parte de un equipo de planeacion o si se odia a usted mismo puede ser Geodesta
      </h2>
    </div>
  </section>
  <div className ="section">
  <div className="container ">
    

    
   <div className="columns">
   <div className="column">
    <h2 className="subtitle"> <Link to="/Catastro"> Catastro</Link></h2>
    <p> Aprenda todo sobre porque las peliculas en las que la escritura hace parte de la trama estan mal</p>
   </div>
   <div className="column">
   <h2 className="subtitle"> <Link to="/Geomatica"> Geomatica</Link></h2>
   <p> Tecnologia de avanzada para que no se pierda en Ciudad Bolivar (y hacer cartografia, que es importante)</p>
   </div>
</div  >
   <div className="columns">
   <div className="column">
   <h2 className="subtitle"><Link to="/Planeacion"> Planeacion </Link></h2>
   <p> La voluntad del pueblo es la que lo forma, y lo hace mal. El trabajo de la planeacion es corregirlo</p>
   </div>
   <div className="column">
   <h2 className="subtitle"><Link to="/Geodesia"> Geodesia </Link></h2>
   <p> Ciencia que estudia de muchas formas la forma de la Tierra. Resulta que para 80% de las cosas da igual</p>
    </div>
   </div>
  </div>
  </div>
  </Layout>
)

export default IndexPage
