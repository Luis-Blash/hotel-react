import React from 'react';
import Navbar from '../components/Navbar';
import BrowserSearch from '../components/BrowserSearch';

// componetes clases
class Principal extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <BrowserSearch/>
                </div>
            </React.Fragment>
        );
    }
}

export default Principal;