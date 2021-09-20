import React from 'react'
import NavBar from '../components/NavBar'
import ListingModel from '../models/ListingModel'
import Listing from '../components/Listing'
import { Link } from 'react-router-dom'


class ListingsShow extends React.Component {
    // call to listing model will go here
    state = {
        listingData: []
    }

    componentDidMount() {
        ListingModel.all().then((data) => {
            console.log(data)
            this.setState({
                listingData: data
            });
        });
    };


    render() {
        return(
            <div>
                <NavBar />
                <h2>Here is where all your listings will go.</h2>
            </div>
        )
    }
}

export default ListingsShow
