import React from 'react';
import Login from './Login';
import NavBar from '../components/NavBar';

class UserControl extends React.Component{
    state = {
        loggedIn: false,
        formStyle: {
            display: 'block'
        }
    }

    //need to pass down login props to make my fetch call here

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
                    style = {this.state.formStyle}
                />
            </div>
        )
    }
}

export default UserControl