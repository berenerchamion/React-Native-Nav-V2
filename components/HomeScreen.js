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

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return{
      headerTitle: 'My Cool Nav Stuff',
      headerRight:(
        <TouchableOpacity
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        >
          <Image
            source={require('../assets/Beren_HR_80x78.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      ),
    }
  }

  state = {
    count: 0,
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
