import { useEffect, useState } from "react"
import { PokemonFull } from "../interfaces/pokemonInterfaces"
import axios from "axios"
import { pokemonApi } from "../api/pokenApi"

export const usePokemon =(id:string)=>{
 
    const [isloading, setIsloading] = useState(true)
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull)


    const loadPokemon =async ()=>{
        const resp =await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(resp.data)
        setIsloading(false)
    }



    useEffect(() => {
      
        loadPokemon()
    }, [])
    

    return{
        isloading,
        pokemon
    }
}