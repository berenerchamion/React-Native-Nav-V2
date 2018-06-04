import React from "react"
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  Button,
} from 'react-native';
import {styles} from '../helpers/styles'

class HOBLogo extends React.Component {
    render(){
      return(
        <Image
          source={require('../assets/Beren_HR_80x78.png')}
          style={{width: 30, height: 30}}
          />
      )
    }
  }

export default (HOBLogo)