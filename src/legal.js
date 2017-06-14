
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';


export default class legal extends Component {

  render(){
    return(
        <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
         <Image style={styles.fondo} source={require('../images/legal.png')} />
       </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFF',
  },
  fondo: {
      flex: 1,
      height: 100,
      resizeMode: 'contain',
      margin: 10,
    },
  mensaje:{
    color:'blue',
    fontSize:24,
    justifyContent:'space-around',
    padding:20,
    textAlign:'center'
  }

});
