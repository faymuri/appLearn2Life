import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../stylesCSS/footer.css'



export default class footer extends Component {
  render() {
    return (

      <footer class="text-center text-lg-start bg-dark text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <img class="footer-logo" src="./logo2.png"/>
                </h6>
                <p>
                All Rights Reserved. Learn2Life is a registered trademark of Software. All other trademarks, service marks or trade names appearing herein are the property of their respective owners. The content has been compiled with meticulous care and to the best of our knowledge. However, Learn2Life cannot assume any liability for the up-to-dateness, completeness or accuracy.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Soluciones
                </h6>
                <p>
                  <a href="#!" class="text-reset">Acerca de </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Procesos</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Servicios</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Trabajos</a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                 Compañia 
                </h6>
                <p>
                  <a href="/#" class="text-reset">App Notas</a>
                </p>
                <p>
                  <a href="/#" class="text-reset">App Evidencias</a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Contacto
                </h6>
                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4">
          © 2021 Copyright:
          <Link class="text-reset fw-bold" href="/">Learn2Life</Link>
        </div>
      </footer>
    )
  }
}
