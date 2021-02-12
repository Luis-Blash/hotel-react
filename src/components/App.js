import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import HomePage from '../pages/HomePage';
import PrincipalPage from '../pages/PrincipalPage';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/hotel" component={PrincipalPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;