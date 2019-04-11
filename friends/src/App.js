import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          path='/login'
          component={Login}
        />
        <PrivateRoute
          exact path='/'
          component={FriendsList}
        />
        <PrivateRoute
          exact path='/add-friend'
          component={FriendForm}
        />
      </div>
    );
  }
}

export default App;
