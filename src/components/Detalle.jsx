import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { pokeDetailAction } from '../redux/pokeDucks'

const Detalle = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(pokeDetailAction())
        }

        fetchData()
    },[dispatch])

    const pokemon = useSelector(store => store.pokemons.aPokemon)
    console.log(pokemon)

    return pokemon ? (
        <div className="card mt-4 text-center">
            <div className="card-body">
                <img src={pokemon.picture} alt="El poke" className="img-fluid"/>
                <div className="car-title text-uppercase">
                    {pokemon.name}   
                </div>
                <p className="card-text">
                    Alto: {pokemon.height} | Ancho:{pokemon.weight}
                </p>
            </div>
        </div>
    ) : null
}

export default Detalle
