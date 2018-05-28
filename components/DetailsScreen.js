import React from "react"
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {styles} from '../helpers/styles'

class DetailsScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Details for item: ' + navigation.getParam('itemId'),
    }
  }

  state = {
    itemId: null,
    otherParam: null,
  }

  componentDidMount(){
    this.setState({
      itemId: this.props.navigation.getParam('itemId', 'NO-ID'),
      otherParam: this.props.navigation.getParam('otherParam', 'hey Beren'),
    })
 }

  render(){
    const { itemId } = this.state
    const { otherParam } = this.state

    return (
      <View style={styles.container}>
        <Text>This is my details screen</Text>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={() => this.props.navigation.push('Details')}
        >
          <Text style={styles.buttonText}>Go To Details Again</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
          onPress={() => this.props.navigation.popToTop()}
        >
          <Text style={styles.buttonText}>Pop To Top</Text>
        </TouchableOpacity>
        <View>
          <Text>Params: {JSON.stringify(itemId)}: {otherParam} </Text>
        </View>
      </View>
    )
  }
}

export default (DetailsScreen)
