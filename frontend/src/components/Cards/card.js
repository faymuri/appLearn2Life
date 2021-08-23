import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './card.css'


function Card({ title, imgSource, text }) {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={imgSource} alt="" className="card-img-top" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugiat tempora voluptas ullam modi iusto optio sapiente! Ipsa iure officiis laudantium. Harum a blanditiis, recusandae voluptatibus enim quas quia illo!'
                    }
                </p>
            </div>
        </div>
    )
}
export default Card
