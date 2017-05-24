
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class instrucciones extends Component {

  render(){
    return(

         <Image style={styles.fondo} source={require('./instruc.png')} />

    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'ghostwhite'
  },
  fondo: {
      flex: 1,
      width: null,
      height: 80,
      resizeMode: 'cover',
      padding: 10,
      backgroundColor: 'gray'
    },
  mensaje:{
    color:'blue',
    fontSize:24,
    justifyContent:'space-around',
    padding:20,
    textAlign:'center'
  }

});
