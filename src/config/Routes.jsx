import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FAQ from '../pages/FAQ';
import CreateListing from '../pages/CreateListing';
import Locations from '../pages/Locations';
import ListingsShow from '../pages/ListingsShow';

function Routes() {
    return(
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/locations' component={Locations} />
            <Route exact path='/locations/listings' component={ListingsShow} />
            {/* locations/id --> show page for that one location  (make the call on the show page to the model...*/}
            <Route exact path='/add-a-listing' component={CreateListing} />
            <Route exact path='/frequently-asked-questions' component={FAQ} />
        </Switch>
    )
}

export default Routes;