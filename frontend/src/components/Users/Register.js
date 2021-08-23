import React, { Component } from 'react'
import './../../stylesCSS/form.css'


export default class register extends Component {


    render() {
        return (
            
                <div className="container text-center my-5 form-user">
                    <form className="form-group">
                        <img className="log-img2 mt-4  mb-4" src="./logo2.png" alt="logo " height="" />
                        <div className="input form-group">
                            <i className="fas fa-user"></i>
                            <label for="name" className="form-control sr-only mb-3  my-4"></label>
                            <input 
                            type="text" 
                            name="text" 
                            class="form-control my-3" 
                            placeholder="Nombre" 
                            />
                        </div>
                        <div className="input form-group">
                            <i className="fas fa-user"></i>
                            <label for="lastname" className="form-control sr-only mb-3  my-4"></label>
                            <input 
                            type="text" 
                            name="text" 
                            className="3 form-control my-3" 
                            placeholder="Apellido" 
                            />
                        </div>
                        <div className="input form-group">
                            <i className="fas fa-envelope"></i>
                            <label htmlFor="Correo Electronico" className="form-control sr-only mb-3  my-4"></label>
                            <input 
                            type ="email" 
                            name ="email" 
                            className ="form-control my-3"
                            placeholder ="Correo Electronico" 
                            />
                        </div>
                        <div className="input form-group">
                            <i className="fas fa-key"></i>
                            <label htmlFor="Password" className="form-label sr-only mb-3">Contraseña</label>
                            <input type="password" id="password" placeholder="Contraseña" className="form-control mb-3" />
                        </div>
                        <div className="input form-group">
                            <i className="fas fa-lock"></i>
                            <label htmlFor="code" className="form-control sr-only mb-3  my-4"></label>
                            <input type="text" id="text" className="form-control my-3" placeholder="Codigo de institución" required autoFocus></input>
                        </div>
                        <div className="my-5">
                            <div className="mt-3">
                                <button className="btn1 btn-lg btn">Iniciar sesión</button>
                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}
