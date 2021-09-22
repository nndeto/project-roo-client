import React from 'react';
import Result from './mapcomponents/Result';


class MapContainer extends React.Component {
    state = {
        location: "",
        lon: "",
        lat: "",
        showMap: ""
    }
    

    componentDidMount() {
        let fullAddress = `${this.props.street_address} ${this.props.city}, ${this.props.state}`
        console.log(fullAddress)
        let currentLocation = this.state.location
        currentLocation = fullAddress
        this.setState({
            location: currentLocation
        })
    }
    

    componentDidUpdate() {
        this.getAddress()
    }

    getAddress = () => {
        const endPoint = `https://us1.locationiq.com/v1/search.php?key=pk.1d2d0bc87e12ce4df72d54bea2e1714a&q=${this.state.location}&format=json`
        let longitude = this.state.lon
        let latitude = this.state.lat
        fetch(endPoint)
        .then(response => {
          
            return(response.json())
        })
        .then(data => {
            console.log(data)
            longitude = data[0].lon
            latitude = data[0].lat
            this.setState({
                lon: longitude,
                lat: latitude
            })
            let url = `https://maps.locationiq.com/v3/staticmap?key=pk.1d2d0bc87e12ce4df72d54bea2e1714a&center=${this.state.lat},${this.state.lon}&zoom=11&size=800x400&format=png&markers=icon:small-gray-cutout|${this.state.lat},${this.state.lon}`
            let map = this.state.showMap
            map = url
            this.setState({
                showMap: map
            })
        })
        .catch(err => {
            if (err) {
                console.log(err)
            }
        })  
    }
    
    render() {
        return(
            <div>
                <h2>Hi, I hold the map pieces.</h2>
                < Result 
                    showMap = {this.state.showMap}
                />
            </div>
        )
    }
}

export default MapContainer