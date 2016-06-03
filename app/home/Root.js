import React, {
  Component,
  Navigator,
  Platform,
} from 'react-native';

var Job = require('./Job');
var Login = require('./Login');

var NavigatorComponent = React.createClass ({

  configureScene(route){
    return Navigator.SceneConfigs.FadeAndroid;
  },

  renderScene(router, navigator){
    var Component = Login;
    this._navigator = navigator;
    switch(router.name){
      case 'Job':
        Component = Job;
        break;
      case 'Login':
        Component = Login;
        break;
    }
    return <Component navigator={navigator} />
  },

  render() {
      return (
          <Navigator
              initialRoute={{name: 'Login'}}
              configureScene={this.configureScene}
              renderScene={this.renderScene} />
      );
  }

});


module.exports = NavigatorComponent;
