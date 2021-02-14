import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <div className="header-barra">
                        <h1><Link to="/">Hotel Rolife</Link></h1>
                        <ul>
                            <li><Link to="/No">Ayuda</Link></li>
                            <li><Link to="/No">Ofertas</Link></li>
                            <li><Link to="/No">Iniciar sesion</Link></li>
                        </ul>
                    </div>
                    <div className="barra"></div>
                </header>
            </React.Fragment>
        );
    }
}

export default Navbar;