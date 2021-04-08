import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPokemonsAction, nextPokemonsAction, previousPokemonsAction,pokeDetailAction} from '../redux/pokeDucks'
import Detalle from './Detalle'

const Pokemons = () => {

    //LEE LA ACTION 
    const dispatch = useDispatch()

    //LEE EL ESTADO OSEA LA DATA INITIAL
    const pokemons = useSelector(store => store.pokemons.results)
    const next = useSelector(store => store.pokemons.next)
    const previous = useSelector(store => store.pokemons.previous)

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(getPokemonsAction())
        }

        fetchData()
    },[dispatch])


    return (
        <div className="row">
            <div className="col-md-6">
                
                <h3>Lista de los pokes</h3>

                {/* {
                    pokemons.length === 0 &&  
                    <button onClick={() => dispatch(getPokemonsAction())} className="btn btn-dark">
                        getPokemons
                    </button>
                } */}

                <ul className="list-group mt-3">
                    {
                        pokemons.map(pokemon => (
                        <li key={pokemon.name} className="list-group-item">
                            {pokemon.name}
                            <button 
                              className="btn btn-dark btn-sm float-right"
                              onClick={() => dispatch(pokeDetailAction(pokemon.url))}
                              >
                                Info
                            </button>
                        </li> 
                        ))
                    }
                </ul>

                <div className="d-flex justify-content-between mt-2 mb-3">
                    {
                        next ? <button onClick={() => dispatch(nextPokemonsAction())} className="btn btn-dark">
                        next
                        </button> : null
                    }

                    {
                        previous ? <button onClick={() => dispatch(previousPokemonsAction())} className="btn btn-dark">
                        previous
                        </button> : null
                    }
                </div>
                

            </div>
            <div className="col-md-6">
                <h3>Detalle Pokemon</h3>
                <Detalle/>
            </div>
        </div>
    )
}

export default Pokemons
