import React from 'react';
import ListingModel from '../models/ListingModel'
import NavBar from '../components/NavBar';
import MapContainer from '../components/MapContainer';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SingleListingShow extends React.Component {
    state = {
        title: '',
        description: '',
        price: '',
        street_address: '',
        city: '',
        state: '',
        pictures:[],
        location: '',
        redirect: false,
    }

    componentDidMount() {
        //whatever you call it in the route (id, listing, etc) is how you must ref it to get it back
        const listingId = this.props.match.params.listing

        ListingModel.showListings(listingId).then((data) => {
            // console.log(data)
            this.setState({
                title: data.title,
                description: data.description,
                price: data.price,
                street_address: data.street_address,
                city: data.city,
                state: data.state,
                pictures: data.pictures
            })
            this.setLocation()
        })
    }


    //gonna be used to pass location to my map container
    setLocation() {
        let fullAddress = `${this.state.street_address} ${this.state.city}, ${this.state.state}`
        let currentLocation = this.state.location
        currentLocation = fullAddress
        this.setState({
            location: currentLocation
        })
    }

    // updateListing --> will call backend route pass to form
        //set the redirect
        //redirect!
    updateListing = () => {
        console.log("you hit me")
    }

    //gonna take that objectid i handed here and send it to the backend!
    deleteListing = () => {
        const listingId = this.props.match.params.listing
            // console.log(listingId)
        ListingModel.deleteListing(listingId).then((res) => {
            // console.log(res)
            this.setState({
                redirect: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const listingId = this.props.match.params.listing
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to = {`/locations`} />;
        }

        return(
            <div>
                <div>
                    <NavBar />
                    <main>
                        <h1>{this.state.title}</h1>
                        <h3>{this.state.description}</h3>
                        <p>${this.state.price}</p>
                        <p>{this.state.street_address}</p>
                        <p>{this.state.city}, {this.state.state}</p>
                        <p>{this.state.pictures}</p>
                    </main>
                    <div>
                        <Link to = {`/update/${listingId}`} >
                            <button>Update</button>
                        </Link>
                        <button onClick = {this.deleteListing}> Delete</button>
                    </div>
                    <div>
                        <MapContainer
                            location = {this.state.location} 
                        />
                    </div>
                </div>
                {/* <EditListingForm 
                    toggleEditForm = {this.toggleEditForm}
                /> */}
            </div>
        )
    }
 }


export default SingleListingShow 
