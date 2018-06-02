import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'
import ModalScreen from './components/ModalScreen'
import SettingsScreen from './components/SettingsScreen'
import {orange, tan, green, white, gray} from './helpers/colors.js'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
    },
  },
)

const MainStack = createStackNavigator(
  {
    Home: Tabs,
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
  },
)

export default class NewApp extends React.Component {
  render() {
    return <RootStack />
  }
}

