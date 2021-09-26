
function LocationCard(props) {
    // console.log(props)
    return(
        <div className = "loc-card">
            <h3 className = "loc-card-title">
                {props.cityNames}
            </h3>
        </div>
    )
}

export default LocationCard