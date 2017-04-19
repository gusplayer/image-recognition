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
  maxWidth: 480
};

export default class Led3 extends Component {

  constructor() {
  super();
  this.state = {
    imageSource:'http://www.fosterapps.com/images/logo-foster2.png',
    tags:'inicial'
  };
}

  onPressButtonGET(){
    fetch('http://brainmakers.net/pruebapp',{
      'method':'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imagen: 'desde reactnative',
      })
    })
    .then((response)=>response.json())
    .then((responseData)=>{
             console.warn(responseData.contenido)
         })
   };

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
      this.setState({imageSource: response.uri})

      console.warn('aqui')

      let data = {
      method: 'GET',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
      imagen: 'mi imagen react'
      }),
        headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
        }
      }

                  console.warn(fetch('http://brainmakers.net/pruebapp2')
                  .then((response) => response.json())
                        .then((responseData) => {
                          console.warn(responseJson)
                        })
                        .catch((error) => {
                          console.warn(error);
                        })
                  )

                    // let data = {
                    // method: 'POST',
                    // credentials: 'same-origin',
                    // mode: 'same-origin',
                    // body: JSON.stringify({
                    // imagen: 'mi imagen react'
                    // }),
                    //   headers: {
                    //   'Accept':       'application/json',
                    //   'Content-Type': 'application/json'
                    //   }
                    // }
                    // console.warn(
                    // ()=>{
                    // fetch('http://brainmakers.net/pruebapp', data)
                    // .then(response => response.json())  // promise
                    // console.warn(response)
                    // // .then(json => dispatch(receiveAppos(json)))
                    // // .then(data => data.imagen)
                    // // return
                    // }
                    // )

       }
     }
    );
  }

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
         <Text>TAG</Text>
        <TouchableHighlight onPress={this.onPressButtonGET}>
            <Text>{this.state.tags}</Text>
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
  }

});

AppRegistry.registerComponent('Led3', () => Led3);
