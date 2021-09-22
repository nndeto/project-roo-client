import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ListingModel from '../models/ListingModel'
import LocationCard from "../components/LocationCard";

class Locations extends React.Component {
    state = {
        listingData: []
    }

    componentDidMount() {
        ListingModel.all().then((data) => {
            // console.log(data)
            this.setState({
                listingData: data
            });
        });
    };

    //1 - convert the array of cities to just an array of strings
    //2 - convert that array of cities (with duples) into a set (which won't have duplicates)
    renderCityNames() {
        //this returns an array of all the city items
        const allData = this.state.listingData.map((cityObj) => {
            return cityObj.city
        })

        //makes a set of all the items so that it'll auto takeout duples
        const singleCity = new Set(allData)
        
        //uses destructuring to create an array of city names from the set
        let singleCityArr = [...singleCity]
        // console.log(singleCityArr)

        //returns LocationCard 
        const cityName = singleCityArr.map((cityName, idx) => {
            return(
                <div>
                    {/* i want each listing to link to listings that have the city name */}
                    <Link to = {`/locations/${cityName}`}>
                        <LocationCard key = {idx} cityNames = {cityName} />
                    </Link>
                    <br/>
                </div>
            )
        })
        return cityName
    }

    render() {
        return(
            <div>
                <NavBar />
                {this.renderCityNames()}
            </div>
        )
    }
}

export default Locations 