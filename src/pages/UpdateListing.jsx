import React from 'react'
import EditListingForm from "../components/EditListingForm";
import { Redirect } from "react-router";
import ListingModel from '../models/ListingModel';

class UpdateListing extends React.Component{
    state = {
        redirect: false
    }

    
    updateListing = (listingId, updatedListing) => {
        console.log(listingId)
        ListingModel.revisedListing(listingId, updatedListing)
        .then((res) => {
            console.log(res)
            this.setState({
                redirect: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    
    render(){
        const listingId = this.props.match.params.listingId
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to = {`/location/city/${listingId}`} />;
        }

        return(
            <div>
                <EditListingForm
                    listingId = {listingId}
                    updateListing = {this.updateListing}
                />
            </div>
        )
    }
}

export default UpdateListing