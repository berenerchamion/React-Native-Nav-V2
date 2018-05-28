import React from "react"
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {styles} from '../helpers/styles'

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
}

  render(){
    return (
      <View style={styles.container}>
        <Text>This is my home screen</Text>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={() => this.props.navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Go To Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'passing nothing too much really.'
          })}
        >
          <Text style={styles.buttonText}>Details with Params</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default (HomeScreen)
