import { Link } from "react-router-dom"

function Listing(props) {
    // console.log(props)
    let singleImg = props.cityObj.pictures[0]

    return (
        <div className = "lis-show-card">
            <Link to = {`/location/city/${props.cityObj._id}`}>
                <p>{props.cityObj.title}</p>
            </Link>
            <Link to = {`/profile/${props.cityObj.lister}`}> 
                <p>{props.cityObj.lister}</p>
            </Link>
            <p>{props.cityObj.description}</p>
            <p>${props.cityObj.price}</p>
            <p>{props.cityObj.street_address}</p>
            <p>{props.cityObj.city}, {props.cityObj.state} </p>
            <img src = {singleImg} alt = "" />
        </div>
    )
}

export default Listing