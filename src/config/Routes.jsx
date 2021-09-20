import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';

function Routes() {
    return(
        <Switch>
            <Route exact path='/' component={HomePage} />
            {/* <Route exact path='/locations' component={Locations} />
            <Route exact path='/add-a-listing' component={CreateListing} />
            <Route exact path='/frequently-asked-questions' component={FAQ} /> */}
        </Switch>
    )
}

export default Routes;