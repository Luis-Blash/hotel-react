import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../images/notfound.svg';
import './style/NotFound.css';

class NotFound extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="notfound">
                    <div className="center">
                        <Link to="/">
                            <img src={notfound} alt="NotFound"/>
                        </Link>
                        <p>Not Found</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NotFound;