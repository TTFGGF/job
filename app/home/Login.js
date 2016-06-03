import React, {
  Component,
  StyleSheet,
  TextInput,
  Image,
  View,
} from 'react-native';

import Button from 'apsl-react-native-button'

// var apiClient = require('AwesomeProject/app/protocol/ApiClient');
//
// var Main = require('./Main');
//
var Job = require('./Job');

var _navigator;

class LoginView extends React.Component {

  constructor(props) {
    super(props);
    _navigator = this.props.navigator;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headView}>
           <Image source={require('../img/iv_head.png')} style={styles.headImage}/>
        </View>
        <TextInput style={styles.userNameTextInput} placeholder="学号/用户名"/>
        <TextInput style={styles.passwordTextInput} placeholder="密码"/>
        <Button style={styles.loginButton} textStyle={styles.loginButtonText} onPress={() => this.goToMain()}>
          登录
        </Button>
      </View>
    );
  }

  goToMain(){
    _navigator.push({name: 'Job'});
    // if(this.props.navigator){
    //   this.props.navigator.push({name: 'Job'});
    // }
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
  },
  headView: {
    alignItems:'center',
    marginTop:60,
  },
  headImage: {
    width:100,
    height:100,
  },
  userNameTextInput:{
    height:35,
    marginLeft:53,
    marginRight:53,
    borderRadius:5,
    marginTop:34,
    fontSize:14,
    paddingLeft:10,
    backgroundColor:'#ffffff',
  },
  passwordTextInput:{
    height:35,
    marginLeft:53,
    marginRight:53,
    borderRadius:5,
    marginTop:14,
    fontSize:14,
    paddingLeft:10,
    backgroundColor:'#ffffff',
  },
  loginButton:{
    height:30,
    marginLeft:53,
    marginRight:53,
    marginTop:14,
    borderRadius:5,
    borderWidth:0,
    backgroundColor:'#FFA726',
  },
  loginButtonText:{
    color:'white',
  },
});

module.exports = LoginView;
