import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FAQ from '../pages/FAQ';
import CreateListing from '../pages/CreateListing';
import Locations from '../pages/Locations';
import ListingsShow from '../pages/ListingsShow';
import SingleListingShow from '../pages/SingleListingShow';
import UpdateListing from '../pages/UpdateListing';


function Routes() {
    return(
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/locations' component={Locations} />
            <Route exact path='/locations/:id' render={(props) => <ListingsShow {...props}/>} />
            <Route exact path ='/location/city/:listing' render={(props) => <SingleListingShow {...props} /> } />
            <Route exact path = '/update/:listingId' render = {(props) => <UpdateListing {...props} />} />
            <Route exact path='/add-a-listing' component={CreateListing} />
            <Route exact path='/frequently-asked-questions' component={FAQ} />
        </Switch>
    )
}

export default Routes;