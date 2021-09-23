import React from 'react';
import Login from './Login';
import NavBar from '../components/NavBar';
import UserModel from '../models/UserModel';

class UserControl extends React.Component{
    state = {
        loggedIn: false,
        formStyle: {
            display: 'block'
        },
        redirect: false
    }

    //need to pass down login props to make my fetch call here
    handleLogin = (username, password) => {
        // console.log(username, password)
        UserModel.userLogin(username, password).then((data)=> {
            console.log(data.message)
        })
    }

    //will make either the signup or login show up instead
    toggleForm = () => {
        this.state.formStyle.display === 'block'
            ? this.setState({ formStyle: { display: 'none' } })
            : this.setState({ formStyle: { display: 'block' } });
    };

    render() {
        return(
            <div>
                <NavBar />
                <Login 
                    formStyle = {this.state.formStyle}
                    toggleForm = {this.toggleForm}
                    handleLogin = {this.handleLogin}
                />
            </div>
        )
    }
}

export default UserControl