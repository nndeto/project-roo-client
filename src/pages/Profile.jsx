import React from "react"
import UserModel from "../models/UserModel"

class Profile extends React.Component{
    state = {
        profileData: []
    }

    componentDidMount() {
        const lister = this.props.match.params.listerName
        UserModel.findProfile(lister).then((data) =>{
            console.log(data)
        })
    }

    render() {
        return(
            <div>
                <p>I'll be a profile page one day.</p>
            </div>
        )
    }
}

export default Profile