import axios from 'axios'

//Constantes
const dataInitial = {
    array: [],
    offset: 0
}

//types
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
const NEXT_POKEMONS_SUCCESS = 'NEXT_POKEMONS_SUCCESS'

//Reducer
export default function pokeReducer(state = dataInitial, action) {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS:
            return  {...state, array: action.payload} 
        case NEXT_POKEMONS_SUCCESS:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default:
            return state;
    }
}


//acciones                   //activa el reducer  //obtine la data
export const getPokemonsAction = () => async(dispatch, getState) => {

    //console.log('getState', getState().pokemons.offset) 
    const offset = getState().pokemons.offset

   try {
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
       dispatch({
           type: GET_POKEMONS_SUCCESS,
           payload: res.data.results 
       })   
   } catch (error) {
       console.log(error)
   }
    
}

export const nextPokemonsAction = (nextNumber) => async(dispatch,getState) => {
    
    //primera alternativa
    const offset = getState().pokemons.offset
    const next = offset + nextNumber 
    
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`)
        dispatch({
            type: NEXT_POKEMONS_SUCCESS,
            payload: {
                array: res.data.results,
                offset: next
            }
        })
    } catch (error) {
        console.log(error)
    }
}