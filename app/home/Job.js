import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  Image,
  View,
  ListView,
  ToolbarAndroid,
} from 'react-native';

var Job = React.createClass({

  getInitialState:function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['row 1']),
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          navIcon={require('../img/icon_left.png')}
          style={styles.toolbar}
          title="职位列表"
          titleColor='white'
          backgroundColor='#009688'
        />
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View style={styles.jobItem}>
            <View style={styles.roundLayout}>
              <Text style={styles.roundLayoutText}>兼职</Text>
            </View>
            <View style={{flexDirection:'column'}}>
              <Text style={{marginLeft:10}}>找聘兼职人员</Text>
              <Text style={{marginLeft:10}}>余杭 5月1日起（共30天）</Text>
              <Text style={{marginLeft:10}}>2016-05-25 14:15:57</Text>
            </View>
          </View>
          }
        />
      </View>
    );
  },

});

var styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#ffffff',
  },

  roundLayoutText:{
    color : '#ffffff',
  },

  roundLayout:{
    width:40,
    height:40,
    backgroundColor:'#ff6091',
    borderRadius:20,
    alignItems:'center',
    justifyContent: 'center',
    marginTop:5,
  },

  jobItem:{
    flex: 1,
    height:100,
    flexDirection: 'row',
    padding:10,
  },

  toolbar: {
    backgroundColor: '#009688',
    height: 56,
  },
});

module.exports = Job;
