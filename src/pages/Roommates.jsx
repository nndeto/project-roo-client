import React from 'react'
import ListingModel from '../models/ListingModel'
import { Link } from 'react-router-dom'
import RoommateCard from '../components/RoommateCard'
import '../css/Roommate.scss'
// import UserModel from '../models/UserModel'

class Roommates extends React.Component{
    state = {
        roommateData: [],
        imgData: [],
        // imgString: "https://i.imgur.com/WLVUvqFm.jpg"
    }

    componentDidMount() {
        ListingModel.all().then((data)=> {
            console.log(data)
            let images = data.map((single) => {
                return single.lister_pic
            })
            this.setState({
                roommateData: data,
                imgData: images
            })
        })
    }

    renderListerNames() {
        const listerData = this.state.roommateData.map((listerObj) => {
            return listerObj.lister
        })
        
        const listerName = listerData.map((singleName, idx) => {
            return(
                <div>
                    <Link to = {`profile/${singleName}`}
                        className = "room-link">
                        <RoommateCard key = {idx} singleName = {singleName} img = {this.state.imgData[idx]}  />
                    </Link>
                </div>
            )
        })
        return listerName
    }

    render() {
        return(
            <main className = "room-main">
                {this.renderListerNames()}
            </main>
        )
    }
}

export default Roommates