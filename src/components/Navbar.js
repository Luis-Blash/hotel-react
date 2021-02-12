import React from 'react';
import './style/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <div className="header-barra">
                        <h1>Hotel Rolife</h1>
                        <ul>
                            <li><a href="">Ayuda</a></li>
                            <li><a href="">Ofertas</a></li>
                            <li><a href="">Iniciar sesion</a></li>
                        </ul>
                    </div>
                    <div className="barra"></div>
                </header>
            </React.Fragment>
        );
    }
}

export default Navbar;