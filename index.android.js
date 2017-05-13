/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import ImagePicker from 'react-native-image-picker';

var options = {
  title: 'Select an Image',
  storageOptions: {
    skipBackup: true,
  },
  maxWidth: 480
};

var resultado = null;
var base64img = null;

export default class Led3 extends Component {

  constructor() {
  super();
  var source = null;
  this.state = {
    imageSource:'https://freeiconshop.com/wp-content/uploads/edd/camera-flat.png',
    tags:'No has subido ninguna imagen'
   };
  this.onPressButtonGET = this.onPressButtonGET.bind(this);
  }



  selectImage(){
  ImagePicker.showImagePicker(
    options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else {
      // Do something with the selected image
      base64img= 'data:image/jpeg;base64,' + response.data;
      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      this.setState({imageSource: response.uri});
      this.setState({tags: 'La imagen se subio correctamente'})
      this.onPressButtonGET();
       }
     }
    );
  }

  onPressButtonGET(){
    fetch('http://brainmakers.net/recognitionimage',{
      'method':'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imagen: base64img
      })
    })
    .then((response)=>response.json())
    .then((responseData)=>
                this.setState({tags: responseData.contenido})
        )
   }

  render() {
    return (
      <Image source={{uri: 'http://mobile-wallpapers.net/wp-content/uploads/2016/09/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82-7.jpg'}} style={styles.fondo}>
        <View style={styles.container}>

            <Image
              source={{uri: this.state.imageSource}}
              style={styles.image}
            />

            <View style={styles.tags}>
             <Text style={styles.textTags}>
             {this.state.tags}
             </Text>
            </View>

             <TouchableHighlight onPress={this.selectImage.bind(this)} style={styles.icons}>
                  <Icon name="camera" size={85} color="blue" />
             </TouchableHighlight>




        </View>
      </Image>
    );
  }

}//end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fondo: {
      flex: 1,
      width: null,
      height: 100,
      resizeMode: 'cover',
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    flex: 4,
    width: 300,
    height:300
  },
  buttonLogin: {
    height: 48,
    backgroundColor: "#1565c0",
    borderColor: "#0d47a1",
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 20,
    marginTop: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
        height: 1,
        width: 0,
        flexDirection: 'row'
        }
    },
    textBotonLogin: {
      color: '#e3f2fd'
    },
    textTags:{

    },
    tags:{
      height: 48,
      backgroundColor: "#b3e5fc",
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 20,
      marginTop: 10,
    },
    icons:{
      height: 60,
      flexDirection: 'row',
      alignItems:'flex-end',
      marginBottom:20,
    }

});

AppRegistry.registerComponent('Led3', () => Led3);
