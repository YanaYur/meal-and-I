import React from 'react';
import Signup from "./components/Signup/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './containers/Home'
import Search from './containers/Search';
import Detail from './containers/Detail';
import Favorites from './containers/Favorites';
import Profile from './containers/Profile';
import PrivateRoute from './HOC/PrivateRoute'

import './assets/styles/config.scss';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />

          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/search" component={Search} />
          <PrivateRoute path="/detail" component={Detail} />
          <PrivateRoute path="/favorites" component={Favorites} />
          <PrivateRoute path="/profile" component={Profile} />

        </Switch>
      </AuthProvider>

    </Router>
  )

}

export default App;
