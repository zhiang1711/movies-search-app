import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBar from './Search/SearchBar';
import DetailsContainer from './Search/DetailsContainer';


const Routes = props => (
    <Switch>
        <Route exact path="/" component={SearchBar} />
        <Route path="/:id" component={DetailsContainer} />
    </Switch>
)

export default Routes;
