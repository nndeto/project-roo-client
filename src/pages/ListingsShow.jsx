import React from 'react'
import ListingModel from '../models/ListingModel';
import Listing from '../components/Listing';

class ListingsShow extends React.Component {
    state = {
        listingData: []
    }
    
    //this gets me my specific data to set my state once my page loads
    componentDidMount() {
        //i passed the city name back here so that i could use it as part of my request to the back
        const cityName = this.props.match.params.id
        // console.log(cityName)
        ListingModel.cityGroup(cityName).then((data) => {
            // console.log(data)
            this.setState({
                listingData: data
            });
        });
    };

    //this is going to return the city objects that we got specific to the cityName
    //and pass it to listing as props
    renderCities() {
        const allData = this.state.listingData.map((cityObj, idx) => {
            return(
                <div>
                    <Listing key = {idx} cityObj = {cityObj} />
                    <br />
                </div>
            )
        });
        return allData
    }

    render() {
        return(
            <div>
                {this.renderCities()}
            </div>
        )
    }
}

export default ListingsShow
