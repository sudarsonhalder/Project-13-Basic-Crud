import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import User from './components/pages/User';
import {Login} from './components/pages/Login';
import Navbar from './components/Structure/Navbar';
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom';

function App (){
   return(
      <Router>
         <div className='App'>
         <Navbar/>
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Register' component={Register}/>
            <Route exact path='/User' component={User}/>
            <Route exact path='/Login' component={Login}/>
         </Switch>
      </div>
      </Router>
   );
}

export default App;


