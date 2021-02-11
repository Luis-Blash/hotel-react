import React from 'react';
import './style/home.css'
import img_Bienvenido from '../images/home_bienvenido.jpg'

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
                            <a href="">Escoger</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;