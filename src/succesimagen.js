
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import {Actions} from 'react-native-router-flux';


export default class fail extends Component {

  constructor(props) {
  super(props);
  var imagen = this.props.imagen
  this.state = {
    imageSource:'https://led-ls.co/contenido/'+imagen
   };
  }

  returnHome(){
      Actions.pop()
  }

  render(){
    return(
      <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
        <Image source={{uri: this.state.imageSource}}  style={styles.image} resizeMode='contain'/>

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

  image:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  icons:{
    flex: 7,
    height: 48,
    width: 200,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: "rgba(255,90,95,1)",
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto:{
    flex: 2,
    color: '#2AABDE'
  }

});
