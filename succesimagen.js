
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class fail extends Component {

  render(){
    return(
      <View style={styles.container}>



      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black'
  },
  mensaje:{
    color:'blue',
    fontSize:24,
    justifyContent:'space-around',
    padding:20,
    textAlign:'center'
  }

});
