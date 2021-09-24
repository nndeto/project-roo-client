import React from 'react';
import './App.css';
import Routes from './config/Routes'
import NavBar from './components/NavBar';

class App extends React.Component {
  state = {
    loggedIn: false,
    currentName: ""
  }

  //when one of its children triggers it later it'll alter state for whole app
  toggleLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
      currentName: ""
    })
  }

  //sets name so that we can pass that name to profile route and create listing form
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
