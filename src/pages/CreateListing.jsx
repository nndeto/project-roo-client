import NavBar from "../components/NavBar";
import React from 'react'
import CreateListingForm from "../components/CreateListingForm";
import ListingModel from "../models/ListingModel";
import { Redirect } from "react-router";


class CreateListing extends React.Component {
    //create listing will go here
    createListing = (listing) => {
        ListingModel.newListing(listing).then(()=> {
            // REVISIT <Redirect to = {`/locations`} />
        })
    }

    render() {
        return(
            <div>
                <NavBar />
                <CreateListingForm 
                    createListing = {this.createListing} />
            </div>
        )
    }
}

export default CreateListing