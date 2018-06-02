import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { styles } from '../helpers/styles'
import { white } from '../helpers/colors'

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default (SettingsScreen)
