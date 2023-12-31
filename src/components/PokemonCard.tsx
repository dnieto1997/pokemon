import React, { useEffect, useRef, useState } from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { FadeInImage } from './FadeInImage'
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native'




interface Props {
    pokemon: SimplePokemon
}

const PokemonCard = ({ pokemon }: Props) => {

    const windowWidth = Dimensions.get('window').width

    const [bgColor, setbgColor] = useState('grey')
    const isMounted = useRef(true)
    const navigation = useNavigation()





    useEffect(() => {

        ImageColors.getColors(pokemon.picture, { fallback: 'grey', cache: true, key: pokemon.picture })

            .then(colors => {
                if (!isMounted.current) return


                (colors.platform === 'ios') ?
                    setbgColor(colors.background || 'grey') :
                    setbgColor(colors.dominant || 'grey')
            })

        return () => {
            isMounted.current = false
        }
    }, [])





    return (



        <TouchableOpacity activeOpacity={0.9}
            onPress={() => navigation.navigate('PokemonScreen',
                { simplePokemon: pokemon, color: bgColor }
            )} >

            <View style={{ ...styles.cardContainer, width: windowWidth * 0.4, backgroundColor: bgColor }}>
                <View>
                    <Text style={styles.name}> {pokemon.name} {'\n#' + pokemon.id}</Text>
                </View>
                <View style={styles.pokebolaContainer}>
                    <Image style={{ ...styles.pokebola }} source={require('../assets/pokebola-blanca.png')} />

                </View>

                <FadeInImage uri={pokemon.picture}
                    style={styles.pokemonImage}


                />
            </View>



        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    }, pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -20,
        overflow: 'hidden',
        opacity: 0.5
    }, pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5
    }, pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5
    }
})


export default PokemonCard