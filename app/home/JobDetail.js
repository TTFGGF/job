import React, {
  Component,
  StyleSheet,
  Text,
  Navigator,
  Image,
  View,
  ToolbarAndroid,
  TouchableHighlight,
} from 'react-native';

var _navigator;

var JobDetail = React.createClass({

  renderScene(router, navigator){
      _navigator = navigator;
  },

  render(){
    return(
        <View>
          <ToolbarAndroid
            navIcon={require('../img/icon_left.png')}
            style={styles.toolbar}
            title="职位详情"
            titleColor='white'
            backgroundColor='#009688'
            onIconClicked = {
              () =>{
                this.goBack();
              }
            }
          />
        </View>
    );
  },

  goBack(){
    // if(_navigator) {
      _navigator.pop();
    // }
  },

});

// var Main = React.createClass({
//
//   configureScene(route){
//     return Navigator.SceneConfigs.FadeAndroid;
//   },
//
//   renderScene(router, navigator){
//     var Component = null;
//     this._navigator = navigator;
//     switch(router.name){
//       case 'JobDetail':
//         Component = JobDetail;
//         break;
//     }
//     return <Component navigator={navigator} />
//   },
//
//   render(){
//     return(
//       <Navigator
//           initialRoute={{name: 'JobDetail'}}
//           configureScene={this.configureScene}
//           renderScene={this.renderScene} />
//     );
//   },
// });

var styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#000000',
  },

  toolbar: {
    backgroundColor: '#009688',
    height: 56,
  },

});

module.exports = JobDetail;
