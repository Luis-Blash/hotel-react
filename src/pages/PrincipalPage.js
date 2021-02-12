import React from 'react';
import Navbar from '../components/Navbar';
import SelectSearch from '../components/SelectSearch';

// componetes clases
class Principal extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <SelectSearch/>
                </div>
            </React.Fragment>
        );
    }
}

export default Principal;