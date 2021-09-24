import React from 'react';
import './App.css';
import Routes from './config/Routes'
// import HomePage from './pages/HomePage';

//could have state in app and pass function to set that state to components tht need it
class App extends React.Component {
  state = {
    loggedIn: false,
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
          loggedIn = {this.state.loggedIn}
          toggleLoggedIn = {this.toggleLoggedIn}
          />
      </div>
    );
  }
}

export default App;
