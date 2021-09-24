import React from 'react'
import CreateListingForm from "../components/CreateListingForm";
import ListingModel from "../models/ListingModel";
import { Redirect } from "react-router";

class CreateListing extends React.Component {
    state = {
        redirect: false,
        cityName: ""
    }

    createListing = (listing) => {
        ListingModel.newListing(listing).then((data)=> {
            let city = data.city
            this.setState({
                redirect: true,
                cityName: city
            });
        })
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to = {`/locations/${this.state.cityName}`} />;
        }

        return(
            <div>
                <CreateListingForm 
                    currentName = {this.props.currentName}
                    createListing = {this.createListing} />
            </div>
        )
    }
}

export default CreateListing