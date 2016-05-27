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

var JobDetail = React.createClass({
  render(){
    return(
        <View>
          <ToolbarAndroid
            navIcon={require('../img/icon_left.png')}
            style={styles.toolbar}
            title="职位详情"
            titleColor='white'
            backgroundColor='#009688'
          />
        </View>
    );
  },
});

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
