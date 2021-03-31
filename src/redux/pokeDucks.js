import axios from 'axios'

//Constantes
const dataInitial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

//types
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
const NEXT_POKEMONS_SUCCESS = 'NEXT_POKEMONS_SUCCESS'

//Reducer
export default function pokeReducer(state = dataInitial, action) {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS:
            return {...state, ...action.payload} 
        case NEXT_POKEMONS_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}


//acciones                   //activa el reducer  //obtine la data
export const getPokemonsAction = () => async(dispatch, getState) => {

    if (localStorage.getItem('offset=0')) {
        console.log('datos guardados')
        dispatch({
            type: GET_POKEMONS_SUCCESS,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        }) 

        return
    }

   try {
       console.log('datos desde la api')
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=&limit=20`)
       dispatch({
           type: GET_POKEMONS_SUCCESS,
           payload: res.data
       }) 
       
       localStorage.setItem('offset=0',  JSON.stringify(res.data))
       
   } catch (error) {
       console.log(error)
   }
    
}

export const nextPokemonsAction = () => async(dispatch,getState) => {
    
     //primera alternativa
     const {next} = getState().pokemons

    if (localStorage.getItem(next)) {
        console.log('datos guardados')
        dispatch({
            type: NEXT_POKEMONS_SUCCESS,
            payload: JSON.parse(localStorage.getItem(next))
        }) 

        return
    }
    
    try {
        const res = await axios.get(next)
        dispatch({
            type: NEXT_POKEMONS_SUCCESS,
            payload: res.data
        })

        localStorage.setItem(next, JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }

}


export const previousPokemonsAction = () => async(dispatch, getState) => {

    const {previous} = getState().pokemons

    if (localStorage.getItem(previous)) {
        console.log('datos guardados')
        dispatch({
            type: NEXT_POKEMONS_SUCCESS,
            payload: JSON.parse(localStorage.getItem(previous))
        }) 

        return
    }
    

    try {
        const res = await axios.get(previous)
        dispatch({
            type: NEXT_POKEMONS_SUCCESS,
            payload: res.data
        })

        localStorage.setItem(previous, JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }

} 