import React from 'react';
import './App.css';
import Routes from './config/Routes'
import NavBar from './components/NavBar';

class App extends React.Component {
  state = {
    loggedIn: false,
    currentName: ""
  }

  toggleLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
      currentName: ""
    })
  }

  setName = (name) => {
    this.setState({
      currentName: name
    })
  }
  
  render() {
    return (
      <div className="App">
        <NavBar 
         loggedIn = {this.state.loggedIn}
         toggleLoggedIn = {this.toggleLoggedIn}
         currentName = {this.state.currentName}
         setName = {this.setName}
        />
        <Routes 
          loggedIn = {this.state.loggedIn}
          toggleLoggedIn = {this.toggleLoggedIn}
          currentName = {this.state.currentName}
          setName = {this.setName}
          />
      </div>
    );
  }
}

export default App;
