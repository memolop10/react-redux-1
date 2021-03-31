import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPokemonsAction, nextPokemonsAction, previousPokemonsAction} from '../redux/pokeDucks'

const Pokemons = () => {

    //LEE LA ACTION 
    const dispatch = useDispatch()

    //LEE EL ESTADO OSEA LA DATA INITIAL
    const pokemons = useSelector(store => store.pokemons.results)
    const next = useSelector(store => store.pokemons.next)
    const previous = useSelector(store => store.pokemons.previous)

    return (
        <div>
            Lista de los pokes

            {
                pokemons.length === 0 &&  
                <button onClick={() => dispatch(getPokemonsAction())}>
                    getPokemons
                </button>
            }

            <ul>
                {
                    pokemons.map(pokemon => (
                       <li key={pokemon.name}>
                           {pokemon.name}
                       </li> 
                    ))
                }
            </ul>

            {
                next ? <button onClick={() => dispatch(nextPokemonsAction())}>
                 next
                </button> : null
            }

            {
                previous ? <button onClick={() => dispatch(previousPokemonsAction())}>
                 previous
                </button> : null
            }
            
        </div>
    )
}

export default Pokemons
