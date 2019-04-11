import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrivateRoute
          exact
          path="/"
          component={FriendsList}
        />
        <Route
          path="/login"
          component={Login}
        />
      </div>
    );
  }
}

export default App;
