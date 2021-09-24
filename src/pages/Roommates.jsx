import React from 'react'
import ListingModel from '../models/ListingModel'
import { Link } from 'react-router-dom'
import RoommateCard from '../components/RoommateCard'

class Roommates extends React.Component{
    state = {
        roommateData: []
    }

    componentDidMount() {
        ListingModel.all().then((data)=> {
            // console.log(data)
            this.setState({
                roommateData: data
            })
        })
    }

    renderListerNames() {
        //so i can get just the lister back in an array
        const listerData = this.state.roommateData.map((listerObj) => {
            return listerObj.lister
        })
        
        const listerName = listerData.map((singleName, idx) => {
            return(
                <div>
                    <Link to = {`profile/${singleName}`}>
                        <RoommateCard key = {idx} singleName = {singleName} />
                    </Link>
                </div>
            )
        })
        return listerName
    }


    render() {
        return(
            <div>
                {this.renderListerNames()}
            </div>
        )
    }
}

export default Roommates