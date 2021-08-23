import React, { Fragment, useState } from 'react'
import './formulario.css'


function Form() {

    const [datos, setDatos] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    })

    const inputHandleChange = (event) => {
        console.log(event.target.value)

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + '' + datos.correo)
    }



    return (
        <Fragment>
            <form className="contacto text-center mx-auto border m-5" onSubmit={enviarDatos}>   
                <h1 className="p-5 fw-bold" >Contacto</h1>
                <div className="form-row mx-auto">
                    <div className="form-group col-md-7 m-3 mx-auto">
                        <input
                            placeholder="Ingrese nombre"
                            className="form-control"
                            type="text"
                            name="nombre"
                            onChange={inputHandleChange}
                        />
                    </div>
                    <div className="form-group col-md-7 m-3 mx-auto">
                        <input
                            placeholder="Ingrese correo Electronico"
                            className="form-control"
                            type="email"
                            name="correo"
                            onChange={inputHandleChange}
                        />
                    </div>
                    <div className="form-group col-md-7 pt-3 h-5 mx-auto">
                        <textarea className="text-area"
                            placeholder="Ingrese un mensaje"
                            className="form-control"
                            type="text"
                            name="mensaje"
                            onChange={inputHandleChange}
                        />
                    </div>
                    <div className="m-5">
                        <button className="btn-contact btn" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default Form
