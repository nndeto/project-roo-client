import React from "react";
import SignupForm from "../components/SignupForm";
import UserModel from "../models/UserModel";
import { Redirect } from "react-router";
import '../css/Login.scss'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        formStyle: {
            display: 'none'
        },
        redirect: false,
        signUpRedirectName: ''
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
            console.log(data)
            this.setState({
                signUpRedirectName: data.createdUser.name,
                redirect: true
            })
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
       //if you sisgnup this is that redirect take them to profile
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to = {`/profile/${this.state.signUpRedirectName}`} />;
        }

      return (
          <div>
            <div className = "log-main" style = {this.props.formStyle}>
                <div >
                    <form onSubmit={this.onSubmit} className = "log-form">
                        <label className = "log-label">
                            Username:
                        </label>
                        <input 
                            name = "username"
                            type = "text"
                            placeholder = "Username"
                            className = "log-input"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                        />
                        <br />
                        <label className = "log-label">
                            Password:
                        </label>
                        <input 
                            name = "password"
                            type = "text"
                            placeholder = "Password"
                            className = "log-input"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                        />
                        <br />
                        {this.props.message}
                        <br />
                        <br />
                        <input type = 'submit' value = "Login" className = "log-button"/>
                    </form>
                </div>
                {/* makes this go away when my signup form is brought up */}
                <div style = {this.props.formStyle}>
                    <hr className = "log-break"/>
                    <p className = "log-quest">Don't have an account?</p>
                    {/* this button toggles both this state and the other states displays to hide the appropriate forms */}
                    <button onClick = {this.handleClick} className = "log-button">Get One</button>
                </div>
          </div>
                <div className = "sign-main">
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
  