import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator, StackNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'
import ModalScreen from './components/ModalScreen'
import {orange, tan, green, white, gray} from './helpers/colors.js'

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: orange,
      },
      headerTintColor: tan,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    MyModal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

export default class NewApp extends React.Component {
  render() {
    return <RootStack />
  }
}

