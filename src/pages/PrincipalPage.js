import React from 'react';
import Navbar from '../components/Navbar';
import BrowserSearch from '../components/BrowserSearch';
import Footer from '../components/Footer'

// componetes clases
class Principal extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <BrowserSearch/>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Principal;