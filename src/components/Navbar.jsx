import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
      <nav class="navbar navbar-dark bg-primary">
         <Link className="navbar-brand" to="/">APP POKEMONS</Link> 
         <div className="d-flex">
             <NavLink className="btn btn-primary mr-2" to="/" exact>Home</NavLink>
             <NavLink className="btn btn-primary mr-2" to="/login" exact>Login</NavLink>

             <button className="btn btn-outline-dark">Cerrar Sesion</button>
         </div>
      </nav>
    )
}

export default Navbar
