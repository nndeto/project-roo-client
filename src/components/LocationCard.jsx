import { Link } from "react-router-dom";

function LocationCard() {
    return(
        <div>
            <Link to = '/locations/listings'>
                <h1>City Name</h1>
            </Link>
                {/* i want the city name to be a link that takes you to a city index based on the name */}
        </div>
    )
}

export default LocationCard