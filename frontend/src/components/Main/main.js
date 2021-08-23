import './../../stylesCSS/main.css'
import React, { Component } from 'react'
import Card from './../Cards/card.js'
import Form from '../Forms/form'
import img1 from './../../stylesCSS/img1.jpg'
import img2 from './../../stylesCSS/img2.jpg'
import img3 from './../../stylesCSS/img3.jpg'


const cards = [
    {
        id: 1,
        title: 'AppLearn2Life',
        image: img1,
        // text: 'Hola Bienvenido a leearn2life este es un texto de ejemplo.'
    },
    {
        id: 2,
        title: 'AppLearn2Life',
        image: img2
    },
    {
        id: 3,
        title: 'AppLearn2Life',
        image: img3
    }
]


export default class main extends Component {

    render() {
        return (
            <div className="container-main">
                <h5 className="page-h5">Combinamos la estrategia, la tecnología, la ciencia de los datos y el diseño en función de las necesidades,
                    de los clientes, con el fin de crear soluciones o servicios que potencien sus modelos de negocio.</h5>
                <h1 className="titulo">Nuestra forma de trabajo</h1>
                <div className="container">
                    <div className="row">
                        {
                            cards.map(card => (
                                <div className="col-md-4" key={card.id}>
                                    <Card title={card.title} imgSource={card.image} text={card.text} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="separador">
                <hr />
                </div>
                <div className="container-mt-5">
                    <Form />
                </div>
                <div className="titulo-movimiento">
                    <h1>Hola</h1>
                    <ul id="texto-movimiento">
                        <li>Usuario!</li>
                        <li>Profesor!</li>
                        <li>Estudiante!</li>
                    </ul>
                </div>
            </div>
        )
    }
}
