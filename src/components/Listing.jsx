import { Link } from "react-router-dom"

function Listing(props) {
    // console.log(props)
    return (
        <div>
            <Link to = {`/location/city/${props.cityObj._id}`}>
                <p>{props.cityObj.title}</p>
            </Link>
            <p>{props.cityObj.description}</p>
            <p>$ {props.cityObj.price}</p>
            <p>{props.cityObj.street_address}</p>
            <p>{props.cityObj.city}, {props.cityObj.state} </p>
            <p>{props.cityObj.pictures}</p>
        </div>
    )
}

export default Listing