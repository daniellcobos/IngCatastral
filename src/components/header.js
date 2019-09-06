
import PropTypes from "prop-types"
import React from "react"
import"./layout.css"
import "./mystyles.scss"
import {Link} from "gatsby"

const Header = ({ siteTitle }) => (
  
   <nav className="navbar is-fixed-top " role="navigation" aria-label="main navigation" style={{ backgroundColor:'rgb(145, 183, 255)'  }}>
  <div className="navbar-brand">
   <Link class="navbar-item" to="/">
     Ingenieria Catastral y Geodesia
   </Link>
  </div>
  <div  className="navbar-menu">
    <div className="navbar-start">
    
      <a class="navbar-item" href="/404">
        ¿Que Rayos somos?
      </a>

      <a class="navbar-item"  href="/404">
        ¿Quien Nos Regula?
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link"  href="/404">
          Disciplinas que conocemos mas o menos
        </a>

        <div class="navbar-dropdown">
          <Link class="navbar-item"  to="/404">
            Geodesia
          </Link>
          <Link class="navbar-item"  to="/Catastro">
            Catastro
          </Link>
          <a class="navbar-item"  href="/404">
            Geomatica
          </a>
          <a class="navbar-item"  href="/404">
            Ordenamiento Territorial
          </a>
          <a class="navbar-item"  href="/404">
            Envennenamiento por alcohol
          </a>
        
      </div>
    </div>

    
  </div>
  <div className="navbar-end">
    <a href="https://www.udistrital.edu.co/" className="navbar-item"> U.Distrital </a>
  </div>
  </div>
   </nav>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
