import React from 'react';
import datos from '../datos.json';
import './style/BrowserSearch.css';

function isSearched(searchTerm) {
    return function(item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()); 
    }
}

class BrowserSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:datos,
            searcTerm: '',
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event){
        this.setState({searcTerm: event.target.value})
    }

    render(){
        return(
            <React.Fragment>
                <div className="search">
                    <form>
                        <input 
                        type="text" 
                        placeholder="Nombre"
                        value={this.state.searcTerm}
                        onChange={this.onSearchChange}
                        />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

/*
{this.state.list.filter(isSearched(this.state.searcTerm)).map(item =>{
        return(
            <p>{item.title}</p>
        );
})}
*/
export default BrowserSearch;