import React from "react";

class SignupForm extends React.Component{
    state = {
        name: '',
        username: '',
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
            age: '',
            about: '',
            profile_pic: '',
            roommate_preferences: ''
        })
    }


    render() {
        return(
            <div style = {this.props.style}>
                <form onSubmit = {this.onFormSubmit}>
                    <label>
                        Name:
                        <input
                            name = "name"
                            type = "text"
                            value = {this.state.name}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Username:
                        <input
                            name = "username"
                            type = "text"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Profile Picture:
                        <input
                            name = "profile_pic"
                            type = "text"
                            value = {this.state.profile_pic}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input
                            name = "age"
                            type = "string"
                            value = {this.state.age}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        About:
                        <textarea
                            name = "about"
                            value = {this.state.about}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Roommate Preferences:
                        <textarea
                            name = "roommate_preferences"
                            value = {this.state.roommate_preferences}
                            onChange = {this.handleInputChange}
                        />
                    </label>
                    <br />
                    <input type = 'submit' value = "Signup"/>
                </form>
            </div>
        )
    }
}

export default SignupForm