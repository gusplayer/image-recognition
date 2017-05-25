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
  Image,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import ImagePicker from 'react-native-image-picker';

import {Actions} from 'react-native-router-flux';

var options = {
  title: 'Select an Image',
  storageOptions: {
    skipBackup: true,
  },
  maxWidth: 480
};

var resultado = null;
var base64img = null;

export default class home extends Component {

  constructor() {
  super();
  var source = null;
  this.state = {
    imageSource:'https://s-media-cache-ak0.pinimg.com/originals/60/ee/69/60ee6916e93413b06e8b319a21521fc3.png',
    tags:'No has subido ninguna imagen',
    tipo: 4,
    valor: 0,
   };

  this.onPressButtonGET = this.onPressButtonGET.bind(this);
  this.handleFail = this.handleFail.bind(this);
  this.handleCorrect = this.handleCorrect.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
   }

   componentDidUpdate(prevProps, prevState) {
   }


  selectImageCamera(){
  ImagePicker.launchCamera(
    options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else {
      this.state.tipo = 3,
      // Do something with the selected image
      base64img= 'data:image/jpeg;base64,' + response.data;
      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      this.setState({imageSource: response.uri});
      this.onPressButtonGET()


      }
     }
    )
  }

  selectImageGalery(){
  ImagePicker.launchImageLibrary(
    options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else {
      this.state.tipo = 3,
      // Do something with the selected image
      base64img= 'data:image/jpeg;base64,' + response.data;
      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      this.setState({imageSource: response.uri});
      this.onPressButtonGET()


      }
     }
    )
  }


  handleFail(){
    Actions.fail();
  }

  handleCorrect(){
    Actions.correcto({video: 'aRRdSgmGYZ0'});
  }

  handleInfo(){
    Actions.instrucciones();
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
                this.setState({
                  tags: responseData.contenido,
                  tipo: responseData.tipo_contenido,
                  valor: responseData.valor})
        )
   }

  render() {
    return (

      <View style={{flex:1}}>
        <View style={styles.container}>




            {this.state.tipo==4 &&
              <View >
               <Text style={styles.welcome}></Text>
              </View>
            }
            {this.state.tipo==0 &&  this.handleFail()}
            {this.state.tipo==0 &&  <Image source={{uri: this.state.imageSource}}  style={styles.image}/>}
            {this.state.tipo==1 &&  this.handleCorrect()}
            {this.state.tipo==2 &&  this.handleCorrect()}
            {this.state.tipo==1 &&  <Image source={{uri: this.state.imageSource}}  style={styles.image}/>}
            {this.state.tipo==2 &&  <Image source={{uri: this.state.imageSource}}  style={styles.image}/>}
            {this.state.tipo==3 &&  <ActivityIndicator size="large" color="green" />}
            {this.state.tipo==4 &&
               <Image style={{width: 280, height: 280}} source={require('./icono.png')}/>
            }

            <View style={styles.tags}>
            <Text style={{fontSize: 20}}>Miràà</Text>
            </View>

        </View>

        <View style={styles.bottom}>

         <TouchableHighlight onPress={this.handleInfo.bind(this)} style={styles.icons}>
              <Icon name="question" size={45} color="#2E3C9A" />
          </TouchableHighlight>

          <TouchableHighlight onPress={this.selectImageCamera.bind(this)} style={styles.icons}>
               <Icon name="camera" size={85} color="#2E3C9A" />
          </TouchableHighlight>

          <TouchableHighlight onPress={this.selectImageGalery.bind(this)} style={styles.icons}>
                <Icon name="arrow-up" size={45} color="#2E3C9A" />
          </TouchableHighlight>

        </View>
      </View>
    );
  }
}//end class

const styles = StyleSheet.create({
  container:{
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  bottom:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
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
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    flex: 8,
    width: 300,
    height:300,
    marginTop: 10
  },

    textBotonLogin: {
      color: '#e3f2fd'
    },
    textTags:{

    },
    tags:{

      width: 300,
      height: 40,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 10,
      marginTop: 5,
    },


});
