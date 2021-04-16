import {auth,firebase} from '../firebase'

//Data inicial
const dataInitial = {
    loading: false,
    active:false
}

//types

const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'

//reducer

export default function usuarioReducer(state = dataInitial,action) {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
        
        case USUARIO_ERROR:
            return {...dataInitial}
        default:
            return {...state}
    }
}


//actions
export const ingresoUsuarioAccion = () => async(dispatch) => {
    
    dispatch({
        type: LOADING
    })
    
    try {
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: USUARIO_ERROR
        })
    }
}