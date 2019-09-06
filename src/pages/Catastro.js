import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import "./mystyles.scss"
import "./index.css"
const SecondPage = () => (
  <Layout>
    <SEO title="Catastro" />
    <div className="hero is-medium is-dark is-bold">
    <div className="hero-body" id="herocatastro">
    <div class="container">
      <h1 class="title">
        El inventario de predios/lotes/parcelas/pedazos de tierra que por supuesto esta atrasado 20 años
      </h1>
      <h2 class="subtitle">
        Aunque en realidad, esto mas bien es sobre los avaluos (segun la ley al menos)
      </h2>
    </div>
  </div>
    </div>
    <div className="container">
    <div className="Content is-small">
        <h1 className="subtitle">¿En que se enfoca la rama catastral de Ingenieria Catastral?</h1>
        <p>En Colombia se le conoce al catastro como un impuesto sobre la propiedad, nada mas cerca y mas lejos de la realidad: <br></br>
            El catastro es en realidad un inventario de bienes inmuebles con un proposito principalmente fiscal (no demuestra propiedad, por ejemplo)
            que deberia interactuar con los otros aspectos de la propiedad pero no lo hace <strong> aun </strong>, el proposito de esta carrera es formar
            un profesional que pueda manejar ese inventario y hacerlo interoperable con otros inventarios similares (como el registro de inmuebles) en 
            preparacion para el catastro multiproposito. ("Well Yes, But Actually No")
        </p>

    </div>
    </div>
    <div className ="section">
  <div className="container ">
    

    
   <div className="columns">
   <div className="column">
    <h2 className="subtitle"> Legislacion Catastral</h2>
    <p> Aprenda sobre leyes sobre la propiedad raiz desde propiedad rural hasta sectas de copropiedad horizontal</p>
   </div>
   <div className="column">
   <h2 className="subtitle">  Sistemas Catastrales</h2>
   <p> Descubra como se forma el inventario de bienes inmuebles, como excusa para viajar por el pais</p>
   </div>
   </div >
   <div className="columns">
   <div className="column">
   <h2 className="subtitle"> Avaluos Puntuales </h2>
   <p> ¿Cuantos metros de tuberia usa su casa? ¿Que esto no es arquitectura? ¡No me importa!</p>
   </div>
   <div className="column">
   <h2 className="subtitle"> Avaluos Masivos </h2>
   <p> Todas las razones porque las cuales el catastro colombiano esta atrasado, tambien avaluos</p>
    </div>
   </div>
   <div className="columns">
   <div className="column">
   <h2 className="subtitle"> Valorizacion </h2>
   <p> Valorese no sea asi (Valorizacion de inmuebles). </p>
   </div>
   <div className="column">
   <h2 className="subtitle"> Electivas de Catastro </h2>
   <p> Estratificacion, Catastro multiproposito y mas. </p>
    </div>
   </div>
  </div>
  </div>

    
  </Layout>
)

export default SecondPage
