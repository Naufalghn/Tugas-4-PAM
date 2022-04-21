import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';
    import { createAppContainer, createSwitchNavigator } from 'react-navigation'
    import { createBottomTabNavigator } from 'react-navigation-tabs'
    import Layarmaps from './src/screens/Layarmaps'
    import Listlayarmaps from './src/screens/Listlayarmaps'
    import { setNavigator } from './src/Navigator'

    const switchNavigator = createSwitchNavigator({
      mainFlow: createBottomTabNavigator({
        lokasiwisata: Layarmaps,
        
        DetailWisata: Listlayarmaps
      })
    })

    const App = createAppContainer(switchNavigator)

    export default () => {
      return (
        <App 
          ref={navigator => {
            setNavigator(navigator)
          }}
        />
      );
    }