import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import PrincipalPage from '../pages/PrincipalPage';

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/hotel" component={PrincipalPage}/>
                <Route exact path="/twitter" component={() => {
                    window.location.href = 'https://twitter.com/luisblash3';
                    return null;
                }}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;