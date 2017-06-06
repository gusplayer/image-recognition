
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import {Actions} from 'react-native-router-flux';


export default class fail extends Component {

  returnHome(){
      Actions.pop()
  }

  render(){
    return(
      <View style={styles.container}>

         <Image style={styles.fondo} source={require('../images/fallo.png')}/>

         <Text style={styles.mensaje}>Lo siento, no encontramos coincidencia.</Text>
         <Text style={styles.sub}>Sube otra imagen, puede ser que la foto que subiste no es lo suficientemente clara
         o tal vez no contiene elementos para identificar.</Text>

         <TouchableHighlight onPress={this.returnHome.bind(this)} style={styles.icons} >
               <Text style={styles.texto}>Vuelve a Intentarlo</Text>
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
  fondo: {
    width: 200,
    height: 200
  },
  mensaje:{
    color:'#34495e',
    fontSize:24,
    justifyContent:'space-around',
    padding:20,
    textAlign:'center'
  },
  sub:{
    color:'#34495e',
    fontSize:14,
    justifyContent:'space-around',
    padding:10,
    textAlign:'center'
  },
  icons:{
    height: 48,
    width: 200,
    flexDirection: 'row',
    backgroundColor: '#778899',
    borderColor: "rgba(255,90,95,1)",
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto:{
    color: 'white'
  }

});
