import React from 'react';
import Signup from "./components/Signup/SignUp";
import { AuthProvider } from "./context/AuthContext";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './containers/Home'

function App() {
  return(
  <Router>
    <AuthProvider>
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route path ="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </AuthProvider>

  </Router>
  )
  
}

export default App;
