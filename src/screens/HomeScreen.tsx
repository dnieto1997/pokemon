import React from 'react'
import { Text, View,Image,FlatList, ActivityIndicator} from 'react-native'


import { useSafeAreaInsets} from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'



  
const HomeScreen = () => {
    
  const {top} =useSafeAreaInsets()
  const {simplePokemonList,loadPokemons} =  usePokemonPaginated()

  return (
  <>
  <Image source={require('../assets/pokebola.png')}
  style={styles.pokebolaBG}
  />
 {/*  <Text style={{
   ...styles.title,
   ...styles.globalMargin,
   top: top + 20,
   
  }}>Pokedex</Text> */}

  <FlatList data={simplePokemonList} 
keyExtractor={(pokemon)=>pokemon.id}
showsVerticalScrollIndicator={false}
renderItem={({item})=>(

  <Image source={{uri:item.picture}} style={{width:100,height:100}} />
)}

//infinite scroll
  onEndReached={loadPokemons}
 onEndReachedThreshold={0.4} 
 ListFooterComponent={(<ActivityIndicator style={{height:100}} size={20}  color="grey" />)}

  
  />
  </>
  )
}

export default HomeScreen