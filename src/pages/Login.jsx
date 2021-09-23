import React from "react";
import SignupForm from "../components/SignupForm";
import UserModel from "../models/UserModel";

class Login extends React.Component {
    state = {
      username: '',
      password: '',
      formStyle: {
        display: 'none'
    }
    };
  
    onSubmit = (event) => {
        event.preventDefault();
        let username = this.state.username
        let password = this.state.password
        this.props.handleLogin(username, password)
    //   console.log("you submitted me") 
        this.setState({
            username: '',
            password: ''
        })
    };

    //going to pass this to the signup form, so that i can send it forward/backword
    handleSignup = (newUser) => {
        UserModel.userSignup(newUser).then((data) => {
            console.log(data.message)
        })
    }
  
    handleInputChange = (event) => {
        const target = event.target;
        // console.log(target.value)
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    //makes it so the signup form displays and the login form disappears
    handleClick = (event) =>{
        this.props.toggleForm()
        this.setState({ formStyle: { display: 'block' } });
    }

    render() {
      return (
          <div>
            <div style = {this.props.formStyle}>
                <form onSubmit={this.onSubmit}>
                    <label>
                        Username:
                    </label>
                    <input 
                        name = "username"
                        type = "text"
                        value = {this.state.username}
                        onChange = {this.handleInputChange}
                    />
                    <br />
                    <label>
                        Password:
                    </label>
                    <input 
                        name = "password"
                        type = "text"
                        value = {this.state.password}
                        onChange = {this.handleInputChange}
                    />
                    <br />
                    <input type = 'submit' value = "Login"/>
                </form>
            </div>
            {/* makes this go away when my signup form is brought up */}
            <div style = {this.props.formStyle}>
                <p>Don't have an account?</p>
                {/* when we click this button i'll need to toggle both 
                this state and the other states displays to hide the appropriate forms */}
                <button onClick = {this.handleClick}>Signup</button>
            </div>
            <div>
                <SignupForm 
                    style = {this.state.formStyle}
                    handleSignup = {this.handleSignup} 
                />
            </div>
          </div>
      );
    }
  }
  
  export default Login
  