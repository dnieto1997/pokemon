import { useEffect, useRef,useState } from "react";
import { pokemonApi } from "../api/pokenApi";
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces/pokemonInterfaces";


export const usePokemonPaginated = ()=>{

  const [isloading, setIsloading] = useState(true)
      const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

const loadPokemons = async()=>{

    const resp =await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current)
     nextPageUrl.current=resp.data.next;
     mapPokemonList(resp.data.results)
    
}

const mapPokemonList =(pokenList:Result[])=>{
          

    const newPokemonList:SimplePokemon[]= pokenList.map(({name,url})=>{
      
    setIsloading(true)

      const  urlParts= url.split('/')
      const id = urlParts[urlParts.length - 2]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
   
      return {id,picture,name}
    })

    setSimplePokemonList([...simplePokemonList,...newPokemonList])
    setIsloading(false)
}


    useEffect(() => {
      loadPokemons()
    }, [])
    

    return {
        simplePokemonList,
        isloading,
        loadPokemons
    }


}