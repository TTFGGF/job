/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
} from 'react-native';

class AwesomeProject extends Component {

  render() {
    return (
      <View style={styles.container}>
      // <Image source={require('./my-icon.png')} />
      // <Image source={require('./iv_head.png')}>
      // </Image>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

// class AwesomeProject extends Component{
//   render(){
//     return(
//
//         <Text>
//           wqekdowqjdkoliwqdjopiwdjiowldjwqiodj
//         </Text>
//     );
//   }
// }

// const TestStyles = StyleSheet.create({
//     container:{
//
//     }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
