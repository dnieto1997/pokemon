import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import Navigaton from './src/navigator/Navigaton';


const App = () => {
  return (
 <>
<NavigationContainer>
<Navigaton/>
</NavigationContainer>
 </>
  )
}

export default App