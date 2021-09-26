import React from "react"
import UserModel from "../models/UserModel"
import ProfileCard from "../components/ProfileCard"

class Profile extends React.Component{
    state = {
        profileData: [],
        message: ""
    }

    componentDidMount() {
        const lister = this.props.match.params.listerName
        UserModel.findProfile(lister).then((data) =>{
            console.log(data.message,  "incoming", data)
            if(data.message === "Not signed up.") {
                this.setState({
                    profileData: [],
                    message: data.message
                })
            }
            if (data.message === "Welcome!")
                this.setState({
                    profileData: data.foundUser,
                    message: data.message
                })
        })
    }

    renderProfile() {
        if(this.state.message === "Not signed up.") {
            return(
                <div>
                    <h1>{this.props.match.params.listerName}, isn't signed up with us.</h1>
                    <p>You can reach out to them via their social media.</p>
                    {/* insert social media links here */}
                </div>
            )
        } else if (this.state.message === "Welcome!") {
                return (
                    <div>
                        <ProfileCard profileData = {this.state.profileData} />
                    </div>
                )
        }
    }

    render() {
        return(
            <div>
                {this.renderProfile()}
            </div>
        )
    }
}

export default Profile