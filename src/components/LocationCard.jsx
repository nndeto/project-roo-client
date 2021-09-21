
function LocationCard(props) {
    // console.log(props)

    return(
        <div>
            <h3>
                {props.cityNames}
            </h3>
                {/* i want the city name to be a link that takes you to a city index based on the name */}
        </div>
    )
}

export default LocationCard