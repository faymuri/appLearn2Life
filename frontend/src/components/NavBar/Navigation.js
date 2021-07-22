import React, { Component } from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../../stylesCSS/navbar.css'


class navigation extends Component {
 

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" id="navbar">
          <Link className="navbar-brand float-start" id="item-1" to="/">
            <h2>Learn2Life</h2>
          </Link>
          <div className="container">
            <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav text-center">
                <li class="nav-item">
                  <Link className="nav-link text-white" to="/">Inicio</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link text-white" to="/about">About Us</Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Login">Iniciar Sesion</Link>
                </li>
                <li className="nav-item" id="nav-item2">
                  <Link className="nav-link active" to="/Register">Registrarse</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Menu Learn
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Evidencias</a></li>
                    <li><a className="dropdown-item" href="#">Log out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default navigation
