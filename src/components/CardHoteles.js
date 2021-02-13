import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/cuartoBlanco1.jpg'

function isSearched(searchTerm) {
    return function(item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()); 
    }
}

class CardHoteles extends React.Component{
    render(){
        const {list, pattern} = this.props
        return(
            <React.Fragment>
                <div className="collection-iteam">
                    {list.filter(isSearched(pattern)).map(item =>{
                        return(
                            <div className="card-hotel">
                                <div className="hotel-img">
                                    <img src={img} alt={item.img}/>
                                </div>
                                <div className="hotel-word">
                                    <div className="hotel-title">
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="hotel-footer">
                                        <span>MXN ${item.price}</span>
                                        <div className="boton-hotel">
                                            <Link to="/hotel">Detalles</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </React.Fragment>

        );
    }
}

export default CardHoteles;