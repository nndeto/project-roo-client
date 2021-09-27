import { Link } from "react-router-dom"

function Listing(props) {
    // console.log(props)
    let singleImg = props.cityObj.pictures[0]

    return (
        <div className = "list-show-card">
            <img src = {singleImg} alt = "Listing Cover" />
            <div className = "list-show-content">
                <Link to = {`/location/city/${props.cityObj._id}`}
                    className = "list-show-link-zero">
                        <p>{props.cityObj.title}</p>
                </Link>
                <Link to = {`/profile/${props.cityObj.lister}`}
                    className = "list-show-link"> 
                    <p>{props.cityObj.lister}</p>
                </Link>
                    <p>${props.cityObj.price}</p>
                    <p>{props.cityObj.street_address}</p>
                    <p>{props.cityObj.city}, {props.cityObj.state} </p>
                    <p>{props.cityObj.description}</p>
            </div>
        </div>
    )
}

export default Listing