import React from 'react';
import Login from './Login';
import UserModel from '../models/UserModel';
import '../css/Login.scss'

class UserControl extends React.Component{
    state = {
        formStyle: {
            display: 'block'
        },
        redirect: false,
        message: ""
    }

    //makes fetch call to login route on server
    //also triggers back up to App to change all the states
    handleLogin = (username, password) => {
        // console.log(username, password)
        UserModel.userLogin(username, password).then((data)=> {
            console.log(data.message)
            this.setState({
                message: data.message
            })
            let name = this.state.message
            this.props.setName(name)
        })
        this.props.toggleLoggedIn()
    }

    //will make either the signup or login show up instead
    toggleForm = () => {
        this.state.formStyle.display === 'block'
            ? this.setState({ formStyle: { display: 'none' } })
            : this.setState({ formStyle: { display: 'block' } });
    };

    render() {
         //need to redirect to profile once we get that coded with user id
        // console.log(this.props)
        //could make message component down here based on state and render
        return(
            <div>
                <Login 
                    formStyle = {this.state.formStyle}
                    toggleForm = {this.toggleForm}
                    handleLogin = {this.handleLogin}
                    message = {this.state.message}
                />
            </div>
        )
    }
}

export default UserControl