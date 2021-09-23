import React from 'react';
import './App.css';
import Routes from './config/Routes'


//could have state in app and pass function to set that state to components tht need it
class App extends React.Component {
  state = {
    loggedIn: false
  }

  toggleLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }



  render() {
    return (
      <div className="App">
        <Routes 
          //logged in and toggle log in pass here
          />
      </div>
    );
  }
}

export default App;
