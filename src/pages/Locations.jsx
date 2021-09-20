import NavBar from "../components/NavBar";
import LocationCard from "../components/LocationCard";

function Locations() {
    return(
        <div>
            <NavBar />
            {/* break this up into a location component */}
            <LocationCard />
        </div>
    )
}

export default Locations 