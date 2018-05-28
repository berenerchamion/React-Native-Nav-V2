import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
)

export default class NewApp extends React.Component {
  render() {
    return <RootStack />
  }
}

