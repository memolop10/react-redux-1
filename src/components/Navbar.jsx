import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {cerrarSesionAccion} from '../redux/usuarioDucks'
import {withRouter} from 'react-router-dom'

const Navbar = (props) => {

  const dispatch = useDispatch()

  const cerrarSesion = () => {
    dispatch(cerrarSesionAccion())
    props.history.push('/login')
  }


  const active = useSelector(store => store.user.active)

    return (
      <nav className="navbar navbar-dark bg-primary">
         <Link className="navbar-brand" to="/">APP POKEMONS</Link> 
         <div className="d-flex">

            {
              active ? (
                <>
                 <NavLink className="btn btn-primary mr-2" to="/" exact>Home</NavLink>
                 <NavLink className="btn btn-primary mr-2" to="/perfil" exact>Profile</NavLink>

                 <button 
                    className="btn btn-outline-dark"
                    onClick={() => cerrarSesion()}>
                      Cerrar Sesion
                 </button>
                </>
              ) : (
                <NavLink className="btn btn-primary mr-2" to="/login" exact>Login</NavLink>
              )
            }
            
         </div>
      </nav>
    )
}

export default withRouter(Navbar) 
