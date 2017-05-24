
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import {Actions} from 'react-native-router-flux';


export default class fail extends Component {

  returnHome(){
      Actions.pop()
  }

  render(){
    return(
      <View style={styles.container}>
         <Text style={styles.mensaje}>Lo sentimos, esta imagen no fue reconocida</Text>
         <TouchableHighlight onPress={this.returnHome.bind(this)} style={styles.icons}>
               <Text>Hola</Text>
          </TouchableHighlight>
      </View>
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
  mensaje:{
    color:'blue',
    fontSize:24,
    justifyContent:'space-around',
    padding:20,
    textAlign:'center'
  }

});
