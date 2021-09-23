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
        errMessage: ""
    }

    //makes fetch call to login route on server
    handleLogin = (username, password) => {
        // console.log(username, password)
        UserModel.userLogin(username, password).then((data)=> {
            console.log(data.message)
            //could set errMessage here
            //if data.message === succeesss do stuff like redirect and set logged in
        })
    }

    //will make either the signup or login show up instead
    toggleForm = () => {
        this.state.formStyle.display === 'block'
            ? this.setState({ formStyle: { display: 'none' } })
            : this.setState({ formStyle: { display: 'block' } });
    };

    render() {
        //could make message component down here based on state and render
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