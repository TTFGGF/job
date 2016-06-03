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
  TouchableHighlight,
} from 'react-native';

var JobDetail = require('./JobDetail');

class Job extends React.Component{

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1','row 1','row 1','row 1','row 1','row 1','row 1','row 1','row 1']),
    };
  }

  // getInitialState:function(){
  //   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   return {
  //     dataSource: ds.cloneWithRows(['row 1','row 1','row 1','row 1','row 1','row 1','row 1','row 1','row 1']),
  //   };
  // }

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
          <TouchableHighlight onPress={() => this._pressRow()}>
            <View style={styles.jobItem}>
              <View style={styles.roundLayout}>
                <Text style={styles.roundLayoutText}>兼职</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                <Text style={{marginLeft:10,fontSize:14}}>找聘兼职人员</Text>
                <Text style={{marginLeft:10,fontSize:14}}>余杭 5月1日起（共30天）</Text>
                <Text style={{marginLeft:10,fontSize:14}}>2016-05-25 14:15:57</Text>
              </View>
            </View>
          </TouchableHighlight>
          }
        />
      </View>
    );
  }

  // _pressRow() {
  //     //this.props.navigator.push({name: 'JobDetail'});
  // }

};

// var Main = React.createClass({
//   configureScene(route){
//     return Navigator.SceneConfigs.FadeAndroid;
//   },
//
//   renderScene(router, navigator){
//     var Component = null;
//
//     this._navigator = navigator;
//     switch(router.name){
//       case "Main":
//         Component = Job;
//         break;
//       case 'JobDetail':
//         Component = JobDetail;
//         break;
//     }
//
//     return <Component navigator={navigator} />
//   },
//
//   render() {
//       return (
//           <Navigator
//               initialRoute={{name: 'Main'}}
//               configureScene={this.configureScene}
//               renderScene={this.renderScene} />
//       );
//   }
//
// });

var styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#000000',
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
    marginTop:10,
  },

  jobItem:{
    flex: 1,
    height:80,
    flexDirection: 'row',
    padding:10,
    backgroundColor:'#ffffff',
  },

  toolbar: {
    backgroundColor: '#009688',
    height: 56,
  },
});

module.exports = Job;
