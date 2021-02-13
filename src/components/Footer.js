import React from 'react';
import { Link } from 'react-router-dom';
import './style/Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <footer>
                    <div className="footer-text">
                        <Link to="">Contactanos</Link>
                        <h2>Hotel Rolife</h2>
                        <a href="htpps://twitter/luisblash3">Luis-Blash</a>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;