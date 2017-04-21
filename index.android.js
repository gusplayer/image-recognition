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

import ImagePicker from 'react-native-image-picker';

var options = {
  title: 'Select an Image',
  storageOptions: {
    skipBackup: true,
  },
  maxWidth: 580
};

var resultado = null;
var base64img = null;

export default class Led3 extends Component {

  constructor() {
  super();
  var source = null;
  this.state = {
    imageSource:'http://icons.iconarchive.com/icons/graphicloads/100-flat/256/camera-icon.png',
    tags:'inicial'
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
      this.setState({tags: 'Imagen Actualizada'})
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
   };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.selectImage.bind(this)}>
          <Text>Select an image</Text>
        </TouchableHighlight>
        <Image
          source={{uri: this.state.imageSource}}
          style={styles.image}
        />
         <Text>{this.state.tags}</Text>
        <TouchableHighlight onPress={this.onPressButtonGET} style={styles.buttonLogin}>
            <Text style={styles.textBotonLogin}>Boton POST</Text>
        </TouchableHighlight>
      </View>
    );
  }




}//end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    width: 200,
    height:200
  },
  buttonLogin: {
    height: 48,
    backgroundColor: "rgba(255,90,95,1)",
    borderColor: "rgba(255,90,95,1)",
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
    flexDirection: 'row',
    color: "#000000"
    }
    },
    textBotonLogin: {
      color: "#000000"
    }

});

AppRegistry.registerComponent('Led3', () => Led3);
