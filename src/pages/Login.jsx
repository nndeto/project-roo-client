import React from "react";

class Login extends React.Component {
    state = {
      username: '',
      password: '',
    };
  
    onSubmit = (event) => {
      event.preventDefault();
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
    }

    render() {
      return (
          <div style = {this.props.style}>
            <div>
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
            <div style = {!this.props.style}>
                <h3>Don't have an account?</h3>
                <button onClick = {this.handleClick}>Signup</button>
            </div>
          </div>
      );
    }
  }
  
  export default Login
  