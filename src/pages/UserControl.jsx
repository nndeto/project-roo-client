import React from 'react';
import Login from './Login';
import NavBar from '../components/NavBar';
import UserModel from '../models/UserModel';

class UserControl extends React.Component{
    state = {
        formStyle: {
            display: 'block'
        },
        redirect: false,
        message: ""
    }

    //makes fetch call to login route on server
    handleLogin = (username, password) => {
        // console.log(username, password)
        UserModel.userLogin(username, password).then((data)=> {
            console.log(data.message)
            this.setState({
                message: data.message
            })
        })
    }

    //will make either the signup or login show up instead
    toggleForm = () => {
        this.state.formStyle.display === 'block'
            ? this.setState({ formStyle: { display: 'none' } })
            : this.setState({ formStyle: { display: 'block' } });
    };

    render() {
         //need to redirect to profile once we get that coded with user id
        console.log(this.props)
        //could make message component down here based on state and render
        return(
            <div>
                <NavBar />
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