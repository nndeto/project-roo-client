import React from "react"
import UserModel from "../models/UserModel"
import ProfileCard from "../components/ProfileCard"
import '../css/Profile.scss'
import { SiTwitter } from 'react-icons/si'
import { SiFacebook } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'


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
                    <h1 className = "profile-title">{this.props.match.params.listerName}, isn't signed up with us.</h1>
                    <p className = "profile-content">You can reach out to them via their social media.</p>
                    {/* insert social media links here */}
                    <div className = "profile-social">
                        <a className = "profile-icon"
                            href = "https://www.facebook.com/"
                            target = "_blank">
                            <SiFacebook />
                        </a>
                        <a className = "profile-icon"
                            href = "https://www.instagram.com/"
                            target = "_blank">
                            <SiInstagram />
                        </a>
                        <a className = "profile-icon"
                            href = "https://twitter.com/"
                            target = "_blank">
                            <SiTwitter />
                        </a>
                    </div>
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
            <div className = "profile-main">
                {this.renderProfile()}
            </div>
        )
    }
}

export default Profile