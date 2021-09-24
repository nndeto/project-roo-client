import React from "react"
import UserModel from "../models/UserModel"
import NavBar from "../components/NavBar"

class Profile extends React.Component{
    state = {
        profileData: [],
        message: ""
    }

    componentDidMount() {
        const lister = this.props.match.params.listerName
        UserModel.findProfile(lister).then((data) =>{
            // console.log(data.message)
            this.setState({
                message: data.message
            })
        })
        this.renderProfile()
    }

    renderProfile() {
        if(this.state.message === "") {
            return(
                <div>
                    <h1>{this.props.match.params.listerName}, isn't signed up with us.</h1>
                    <p>You can reach out to them via their social media.</p>
                </div>
            )
        } else {
            const allData = this.state.profileData.map((profileObj, idx) => {
                return(
                    <div>
                        <Listing key = {idx} profileObj = {profileObj} />
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
                {this.renderProfile}
            </div>
        )
    }
}

export default Profile