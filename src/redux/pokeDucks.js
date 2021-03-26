import axios from 'axios'

//Constantes
const dataInitial = {
    array: []
}

//types
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'

//Reducer
export default function pokeReducer(state = dataInitial,action) {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS:
            return  {...state, array: action.payload} 

        default:
            return state;
    }
}


//acciones                   //activa el reducer  //obtine la data
export const getPokemonsAction = () => async(dispatch, getState) => {
   try {
       const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
       dispatch({
           type: GET_POKEMONS_SUCCESS,
            payload: res.data.result
       })   
   } catch (error) {
       console.log(error)
   }
    
}