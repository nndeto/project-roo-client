import React from "react";

class SignupForm extends React.Component{
    state = {
        name: '',
        username: '',
        password: '',
        age: '',
        about: '',
        profile_pic: '',
        roommate_preferences: ''
    }

//write a general function to handle input values
    //referenced react forms
    handleInputChange = (event) => {
        const target = event.target;
        // console.log(target.value)
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        //creates a newListing we can pass our backend based off our form data
        let newUser = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            age: this.state.age,
            about: this.state.about,
            profile_pic: this.state.profile_pic,
            roommate_preferences: this.state.roommate_preferences
        }
        this.props.handleSignup(newUser);
        // // resets our form state after the form has been submitted
        this.setState({
            name: '',
            username: '',
            password: '',
            age: '',
            about: '',
            profile_pic: '',
            roommate_preferences: ''
        })
    }

    render() {
        return(
            <div style = {this.props.style} className = "sign-main">
                <form onSubmit = {this.onFormSubmit} className = "sign-form">
                    <label className = "sign-label">
                        Name:
                        <input
                            name = "name"
                            type = "text"
                            placeholder = "Name"
                            className = "sign-input"
                            value = {this.state.name}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label className = "sign-label">
                        Username:
                        <input
                            name = "username"
                            type = "text"
                            placeholder = "Username"
                            className = "sign-input"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label className = "sign-label">
                        Password:
                        <input
                            name = "password"
                            type = "text"
                            placeholder = "Password"
                            className = "sign-input"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label className = "sign-label">
                        Profile Picture:
                        <input
                            name = "profile_pic"
                            type = "text"
                            placeholder = "Profile Picture"
                            className = "sign-input"
                            value = {this.state.profile_pic}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label className = "sign-label">
                        Age:
                        <input
                            name = "age"
                            type = "string"
                            placeholder = "Age"
                            className = "sign-input"
                            value = {this.state.age}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label className = "sign-label">
                        About:
                        <textarea
                            name = "about"
                            placeholder = "About"
                            className = "sign-input"
                            value = {this.state.about}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label className = "sign-label">
                        Roommate Preferences:
                        <textarea
                            name = "roommate_preferences"
                            placeholder = "Roommate Preferences"
                            className = "sign-input"
                            value = {this.state.roommate_preferences}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <input type = 'submit' value = "Signup" className = "sign-button"/>
                </form>
            </div>
        )
    }
}

export default SignupForm