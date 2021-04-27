import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ingresoUsuarioAccion} from '../redux/usuarioDucks' 

import {withRouter} from 'react-router-dom'

const Login = (props) => {

   const dispatch = useDispatch();
   
   const loading = useSelector(store => store.user.loading)
   const active = useSelector(store => store.user.active)

    useEffect(() => {
      console.log(active)
      if (active) {
        props.history.push('/')
      }
    }, [active, props.history])
    return (
        <div className="mt-5 text-center">
          <h3>Ingreso con Google</h3>
          <button 
            className="btn btn-dark"
            onClick={() => dispatch(ingresoUsuarioAccion())}
            disabled={loading}>
              Acceder
          </button>
        </div>
    )
}

export default withRouter(Login)
