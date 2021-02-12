import React from 'react';
import { Link } from 'react-router-dom';
import './style/home.css';

// componetes clases
class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="home flex-center">
                    <div className="home_welcome">
                        <div className="home_title">
                            <h1>Hotel Rolife</h1>
                            <h2>Disfruta de tu habitación como si fuera tu propia casa</h2>
                        </div>
                        <div className="home_boton">
                            <Link to="/hotel">Escoger</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;