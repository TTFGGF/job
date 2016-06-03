// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   TextInput,
//   Navigator,
//   Image,
//   View,
// } from 'react-native';
//
// import Button from 'apsl-react-native-button'
//
// var apiClient = require('./app/protocol/ApiClient');
//
// var Main = require('./app/home/Main');
//
// var LoginView = React.createClass({
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.headView}>
//            <Image source={require('./app/img/iv_head.png')} style={styles.headImage}/>
//         </View>
//         <TextInput style={styles.userNameTextInput} placeholder="学号/用户名"/>
//         <TextInput style={styles.passwordTextInput} placeholder="密码"/>
//         <Button style={styles.loginButton} textStyle={styles.loginButtonText} onPress={this._handlePress}>
//         登录
//       </Button>
//       </View>
//     );
//   },
//   _handlePress(event) {
//     //console.log('Pressed!');
//     //apiClient.login('testxs16001','123456');
//       this.goToMain();
//   },
//
//   goToMain(){
//       this.props.navigator.push({name: 'Main'});this.props.navigator.push({name: 'Main'});
//   }
//
// });
//
// var AwesomeProject = React.createClass ({
//
//     configureScene(route){
//       return Navigator.SceneConfigs.FadeAndroid;
//     },
//
//     renderScene(router, navigator){
//       var Component = null;
//
//       this._navigator = navigator;
//       switch(router.name){
//         case "login":
//           Component = LoginView;
//           break;
//         case "Main":
//           Component = Main;
//           break;
//       }
//
//       return <Component navigator={navigator} />
//     },
//
//     render() {
//         return (
//             <Navigator
//                 initialRoute={{name: 'login'}}
//                 configureScene={this.configureScene}
//                 renderScene={this.renderScene} />
//         );
//     }
//
// });
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#009688',
//   },
//   headView: {
//     alignItems:'center',
//     marginTop:60,
//   },
//   headImage: {
//     width:100,
//     height:100,
//   },
//   userNameTextInput:{
//     height:35,
//     marginLeft:53,
//     marginRight:53,
//     borderRadius:5,
//     marginTop:34,
//     fontSize:14,
//     paddingLeft:10,
//     backgroundColor:'#ffffff',
//   },
//   passwordTextInput:{
//     height:35,
//     marginLeft:53,
//     marginRight:53,
//     borderRadius:5,
//     marginTop:14,
//     fontSize:14,
//     paddingLeft:10,
//     backgroundColor:'#ffffff',
//   },
//   loginButton:{
//     height:30,
//     marginLeft:53,
//     marginRight:53,
//     marginTop:14,
//     borderRadius:5,
//     borderWidth:0,
//     backgroundColor:'#FFA726',
//   },
//   loginButtonText:{
//     color:'white',
//   }
//
// });
//
// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

import React from 'react';
import Root from './app/home/Root';
import Login from './app/home/Login';
import {AppRegistry} from 'react-native';

AppRegistry.registerComponent('AwesomeProject', () => Root);
