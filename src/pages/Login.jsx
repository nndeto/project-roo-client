import React from "react";
import SignupForm from "../components/SignupForm";

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
      console.log("you submitted me")   
    };
  
    handleInputChange = (event) => {
        const target = event.target;
        // console.log(target.value)
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

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
                <SignupForm style = {this.state.formStyle} />
            </div>
          </div>
      );
    }
  }
  
  export default Login
  