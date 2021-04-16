import React from 'react'

import Pokemons from "./components/Pokemons";
import Login from './components/Login';
import Navbar from './components/Navbar';

import {
 BrowserRouter as Router,
 Switch,
 Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mt-3">

        <Navbar/>

       <Switch>
         <Route component={Pokemons} path="/" exact/>
         <Route component={Login} path="/login" />
       </Switch>
      </div>
    </Router>
  );
}

export default App;
