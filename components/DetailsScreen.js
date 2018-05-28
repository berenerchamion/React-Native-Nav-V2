import React from "react"
import { Text, View } from 'react-native';
import {styles} from '../helpers/styles'

class DetailsScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>This is my details screen</Text>
      </View>
    )
  }
}

export default DetailsScreen