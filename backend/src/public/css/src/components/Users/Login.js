import React, { Component } from 'react'
import './../../stylesCSS/form.css'
import axios from 'axios';



const url = 'http://localhost:4000/users/login'


export default class login extends Component {

    state = {
        form:{
            email: '',
            passsword: ''
        }
    }

    handleChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.email]: e.target.value
            }
        })
        console.log(this.state.form)
    }


    iniciarSesion = async () =>{
        await axios.get(url, {params: {email : this.state.form.email,password: this.state.form.password}})
        .then(response =>{
            console.log(response.data)  
        })
        .catch(error=>{
            console.log(error);
        })
    }


    render() {
        return (
            <div className="container text-center my-5 form-user">
                <form className="form-group" method = "post">
                    <img className="log-img mt-4  mb-4" src="./user.png" alt="logo " height="" />
                    <h1 className="fw-bold">Iniciar Sesión</h1>
                    <div className="input form-group">
                        <i className="fas fa-user"></i>
                        <label HtmlFor="Correo Electronico" className="form-control sr-only mb-3  my-4"></label>
                        <input 
                        name = "email"
                        type="email"  
                        className=" form-control my-3" 
                        placeholder="Correo Electronico"
                        onChange = {this.handleChange}
                        />
                    </div>
                    <div className="input form-group">
                        <i className="fas fa-key"></i>
                        <label for="Password" class="form-label sr-only mb-3">Contraseña</label>
                        <input 
                        name ="password"
                        type="password"
                        placeholder="Contraseña" 
                        className="form-control mb-3" 
                        onChange = {this.handleChange}
                        />
                    </div>
                    <div className="checkbox mt-4">
                        <label>
                            <input type="checkbox" value="recordarme"/>Recordarme
                        </label>
                    </div>
                    <div className="mt-3">
                        <button onClick = {()=> this.iniciarSesion()} className="btn1 btn-lg btn btn-block">Iniciar sesión</button>
                    </div>
                    <div className="form-group">
                        <h6 href="" className="nav-link letra">Iniciar Sesion como administrador</h6>
                    </div>
                    <div>
                        <div className="form-group">¿Aún no tienes cuenta?
                            contacta con tu institución
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
