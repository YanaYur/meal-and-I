import React from 'react';
import Signup from "./components/Signup/SignUp";
import { AuthProvider } from "./context/AuthContext";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './containers/Home'
import Search from './containers/Search';
import Detail from './containers/Detail';

import './assets/styles/config.scss';

function App() {
  return(
  <Router>
    <AuthProvider>
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path ="/signup">
          <Signup/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
      </Switch>
    </AuthProvider>

  </Router>
  )
  
}

export default App;
