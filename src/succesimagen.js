
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class fail extends Component {

  constructor(props) {
  super(props);
  var imagen = this.props.imagen
  this.state = {
    imageSource:'https://led-ls.co/contenido/'+imagen
   };
  }

  render(){
    return(
      <View style={styles.container}>
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
  }

});
