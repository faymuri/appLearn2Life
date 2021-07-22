import React, { Component } from 'react'
import './../../stylesCSS/navbar.css'

export default class MenuItems extends Component {
    render() {
        return (
                <div className="container-portada">  
                    <div className="capa-gradient">
                        <div className="container-details">
                            <div className="details">
                                <img src="./logo.png" alt="logo-header"/>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                <button>Ver mas detalles</button>
                            </div>
                        </div>
                    </div>
               </div>
        )
    }
}
