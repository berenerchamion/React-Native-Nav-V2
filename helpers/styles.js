import {StyleSheet} from "react-native"
import {orange, tan, green, white, gray} from './colors.js'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iosBtn: {
    backgroundColor: orange,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  androidBtn: {
    backgroundColor: orange,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
    marginBottom: 10,
    marginRight: 2,
    marginLeft: 2,
    height: 45,
    borderRadius: 2,
  },
  buttonText: {
    color: tan,
    fontSize: 22,
    textAlign: 'center',
  },
})