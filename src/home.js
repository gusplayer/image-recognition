/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
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
    contenido: null,
   };

  this.onPressButtonGET = this.onPressButtonGET.bind(this);
  this.handleFail = this.handleFail.bind(this);
  this.handleCorrectImagen = this.handleCorrectImagen.bind(this);
  this.handleCorrectVideo = this.handleCorrectVideo.bind(this);
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

  handleCorrectImagen(){
    imagen =this.state.contenido

    Actions.correctoImagen({imagen: imagen});
  }

  handleCorrectVideo(){
    var url = this.state.contenido;
    var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    if(videoid != null) {
        video = videoid[1];
        Actions.correctoVideo({video: video});
    } else {
        console.warn("The youtube url is not valid.");
        this.state.tipo = 6;
    }

  }

  handleInfo(){
    Actions.instrucciones();
  }

  handleLegal(){
    Actions.legal();
  }

  onPressButtonGET(){
    fetch('http://led-ls.co/recognitionimage',{
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
                  contenido: responseData.contenido,
                  tipo: responseData.tipo_contenido,
                  valor: responseData.valor})
        )
   }

  render() {
    return (

      <View style={{flex:1, backgroundColor: '#1E2426'}}>

        <View style={styles.top} >
        <TouchableHighlight onPress={this.handleLegal.bind(this)} style={styles.icons}>
             <Icon name="exclamation" size={40} color="#7f8c8d" style={{marginRight:20}} />
         </TouchableHighlight>
        </View>

        <View style={styles.container}>

            {this.state.tipo==4 &&
              <View >
               <Text style={styles.welcome}></Text>
              </View>
            }
            {this.state.tipo==0 &&  this.handleFail()}
            {this.state.tipo==0 &&  <Image source={{uri: this.state.imageSource}}  style={styles.image}/>}
            {this.state.tipo==1 &&  this.handleCorrectImagen()}
            {this.state.tipo==2 &&  this.handleCorrectVideo()}
            {this.state.tipo==1 &&  <Image source={{uri: this.state.imageSource}}  style={styles.image}/>}
            {this.state.tipo==2 &&  <Image source={{uri: this.state.imageSource}}  style={styles.image}/>}
            {this.state.tipo==3 &&  <ActivityIndicator size="large" color="green" />}
            {this.state.tipo==4 &&
              <View style={{alignItems: 'center'}}>
                <Image style={{width: 90, height: 90, marginBottom:20}} source={require('../images/icono.png')}/>
                <Image style={{width: 270, height: 270, marginBottom:40}} source={require('../images/frase.png')}/>
              </View>
            }
            {this.state.tipo==6 && <Text style={{color:'white'}}>
              Se ha identifica una imagen, pero no es posible ver el video por que no es de YouTube + {this.state.contenido}
            </Text>}

        </View>

        <View style={styles.bottom}>

         <TouchableHighlight onPress={this.handleInfo.bind(this)} style={styles.icons}>
              <Icon name="question" size={45} color="#2AABDE" />
          </TouchableHighlight>

          <TouchableHighlight onPress={this.selectImageCamera.bind(this)} style={styles.icons}>
               <Icon name="camera" size={95} color="#FFFFFF" />
          </TouchableHighlight>

          <TouchableHighlight onPress={this.selectImageGalery.bind(this)} style={styles.icons}>
                <Icon name="image" size={45} color="#2AABDE" />
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
    backgroundColor: '#1E2426'
  },
  bottom:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E2426',
    marginBottom: 20
  },
  top:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
