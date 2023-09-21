import React from 'react'
import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native'


import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { FadeInImage } from '../components/FadeInImage'
import PokemonCard from '../components/PokemonCard'




const HomeScreen = () => {

  const { top } = useSafeAreaInsets()
  const { simplePokemonList, loadPokemons } = usePokemonPaginated()

  return (
    <>
      <Image source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />




      <View style={{alignItems:'center'}}>

      
      <FlatList data={simplePokemonList}
        keyExtractor={(pokemon) => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}

        //heade component

        ListHeaderComponent={(
          <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20, marginBottom: top + 20,paddingBottom:10 }}>
            Pokedex

          </Text>
        )}
        renderItem={({ item }) => (

          <PokemonCard pokemon={item} />
        )}

        //infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={(<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />)}


      />
        </View>
    </>
  )
}

export default HomeScreen