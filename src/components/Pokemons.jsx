import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPokemonsAction, nextPokemonsAction} from '../redux/pokeDucks'

const Pokemons = () => {

    const dispatch = useDispatch()

    const pokemons = useSelector(store => store.pokemons.array)

    return (
        <div>
            Lista de los pokes
            <button onClick={() => dispatch(getPokemonsAction())}>
                getPokemons
            </button>
            <ul>
                {
                    pokemons.map(pokemon => (
                       <li key={pokemon.name}>
                           {pokemon.name}
                       </li> 
                    ))
                }
            </ul>
            <button onClick={() => dispatch(nextPokemonsAction(20))}>
                next
            </button>
        </div>
    )
}

export default Pokemons
