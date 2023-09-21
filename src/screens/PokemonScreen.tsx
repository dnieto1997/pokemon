import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import { RootStackParams } from '../navigator/Navigaton'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage'
import { pokemonApi } from '../api/pokenApi'



interface Props extends StackScreenProps<RootStackParams,'PokemonScreen'>{};

const PokemonScreen = ({navigation,route}:Props) => {
  const {top}=useSafeAreaInsets()
  const {simplePokemon,color}=route.params
  const {id,name,picture}=simplePokemon
  return (
    <View>
    <View  style={{...styles.headerContainer,backgroundColor:color}} >
            <TouchableOpacity activeOpacity={0.9} style={{...styles.backButton,top:top+5}} 
            onPress={()=>navigation.pop()}
            
            >
              <Icon 
            name='arrow-back-outline'
              color='white'
              size={35}
              />

            </TouchableOpacity>


            <Text style={{...styles.pokemonName,top:top+45}}> {name + '\n'}# {id}</Text>


            <Image source={require('../assets/pokebola-blanca.png')} style={{...styles.pokeball}}/>


            <FadeInImage uri={picture}  style={styles.pokemonImage}/>
    </View>
  </View>
  )
}

const styles= StyleSheet.create({
headerContainer:{
  height:370,
  zIndex:999,
  alignItems:'center', 
  borderBottomRightRadius:1000,
  borderBottomLeftRadius:1000
},
backButton:{
  position:'absolute',
  left:20,
  

},pokemonName:{
  color:'white',
  fontSize:40
,alignSelf:'flex-start',
left:20
}, pokeball:{
  width:250,
  height:250,
  bottom:-20,
  opacity:0.7
},pokemonImage:{
 width:250,
 height:250,
 position:'absolute',
 bottom:-15
}
})

export default PokemonScreen