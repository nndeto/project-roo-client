import React from 'react';
import ListingModel from '../models/ListingModel'
import MapContainer from '../components/MapContainer';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SingleListingShow extends React.Component {
    state = {
        lister: '',
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
                lister: data.lister,
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

        const pictures = this.state.pictures
        let singleImg = pictures.map((single) => {
            return(
                <img src = {single} alt = "" />
            )
        })

        return(
            <div>
                <div>
                    <main>
                        <h1>{this.state.title}</h1>
                        <p>${this.state.price}</p>
                        <h2>{this.state.lister}</h2>
                        <p>{this.state.description}</p>
                        <p>{this.state.street_address}</p>
                        <p>{this.state.city}, {this.state.state}</p>
                        {singleImg}
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
            </div>
        )
    }
 }


export default SingleListingShow 
