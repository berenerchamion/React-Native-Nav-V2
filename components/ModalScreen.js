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

class ModalScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: white, justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.buttonText}>Close Me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ModalScreen