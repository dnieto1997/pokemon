import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { ScrollView } from 'react-native-gesture-handler'


interface Props{
pokemon:PokemonFull
}

const PokemonDetails = ({pokemon}:Props) => {


  return (
   <ScrollView style={{...StyleSheet.absoluteFillObject }}>
<View style={{...styles.container,marginTop:370}}> 
<Text style={styles.title}> Types </Text>
 {
    pokemon.types.map(({type})=>(
       <Text key={type.name} > 
        {type.name}
       </Text>

    ))
} 

</View>


   </ScrollView>
  )
}
 const styles = StyleSheet.create({
    container:{
        marginHorizontal:20
    },title:{
        fontWeight:'bold',
        fontSize:20
    }
 })
export default PokemonDetails