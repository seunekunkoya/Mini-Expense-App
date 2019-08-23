import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
    };
  }

  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="container">
        {/*  */}
        {this.state.route === 'dashboard' ? (
          <Dashboard />
        ) : this.state.route === 'login' ? (
          <Login />
        ) : this.state.route === 'signup' ? (
          <Signup />
        ) : (
          <div>
            <Home
              onClickLogin={this.onRouteChange}
              onClickSignup={this.onRouteChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
