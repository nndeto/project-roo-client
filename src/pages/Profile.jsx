import React from "react"
import UserModel from "../models/UserModel"
import NavBar from "../components/NavBar"
import ProfileCard from "../components/ProfileCard"

class Profile extends React.Component{
    state = {
        profileData: [],
        message: ""
    }

    componentDidMount() {
        const lister = this.props.match.params.listerName
        UserModel.findProfile(lister).then((data) =>{
            // console.log(data.message)
            if(data.message === "Not signed up.") {
                this.setState({
                    profileData: [],
                    message: data.message
                })
            } else {
                this.setState({
                    profileData: data,
                    message: ""
                })
            }
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
        } else {
            const allData = this.state.profileData.map((profileObj, idx) => {
                return(
                    <div>
                        <ProfileCard key = {idx} profileObj = {profileObj} />
                        <br />
                    </div>
                )
            });
            return allData
        }
    }

    render() {
        return(
            <div>
                <header>
                    <NavBar />
                </header>
                {this.renderProfile()}
            </div>
        )
    }
}

export default Profile