import React from 'react';
import datos from '../datos.json';
import CardHoteles from './CardHoteles';
import './style/BrowserSearch.css';



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
                    <CardHoteles list={this.state.list} pattern={this.state.searcTerm}/>
                </div>
            </React.Fragment>
        );
    }
}
export default BrowserSearch;