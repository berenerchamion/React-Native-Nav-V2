import React from "react"
import { Text, View } from 'react-native';
import {styles} from '../helpers/styles'

class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>This is my home screen</Text>
      </View>
    )
  }
}

export default HomeScreen