import React from 'react';
import ListingModel from '../models/ListingModel'
import NavBar from '../components/NavBar';

class SingleListingShow extends React.Component {
    state = {
        title: '',
        description: '',
        price: '',
        street_address: '',
        city: '',
        state: '',
        pictures:''
    }

    componentDidMount() {
        const listingId = this.props.match.params.listing
        console.log(listingId)

    }



    render() {
        return(
            <div>
                <NavBar />
                <h1>This is gonna show info for just one listing</h1>
            </div>
        )
    }
 }


export default SingleListingShow 
