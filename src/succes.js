
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import YouTube from 'react-native-youtube';

import {Actions} from 'react-native-router-flux';

export default class fail extends Component {

  constructor(props) {
  super(props);
  var video = this.props.video;
  this.state = {
    imageSource:'https://s-media-cache-ak0.pinimg.com/originals/60/ee/69/60ee6916e93413b06e8b319a21521fc3.png',
    tags:'No has subido ninguna imagen',
    tipo: 4,
    valor: 0,
   };
 }

 returnHome(){
     Actions.pop()
 }

  render(){
    return(
      <View style={styles.container}>

          <YouTube
                ref={(component) => {
                  this._youTubePlayer = component;
                }}
                apiKey="AIzaSyAaiBfx9dGB2HEqO2n96xHFkinf204wzng"
                videoId={video}   // A playlist's ID, overridden by `videoId`
                play={true}                      // control playback of video with true/false
                fullscreen={true}               // control whether the video should play in fullscreen or inline
                loop={true}           // control whether the video should loop when ended
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                onProgress={e => this.setState({ currentTime: e.currentTime, duration: e.duration })}
                showFullscreenButton={true}

                style={{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10 }}
        />

        <TouchableHighlight onPress={this.returnHome.bind(this)} style={styles.icons} >
              <Text style={styles.texto}>Volver al inicio</Text>
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
    backgroundColor:'black'
  },
  mensaje:{
    color:'blue',
    fontSize:24,
    justifyContent:'space-around',
    padding:20,
    textAlign:'center'
  },
  icons:{
    height: 48,
    width: 200,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderColor: "rgba(255,90,95,1)",
    alignItems: 'center',
    justifyContent: 'center',

  },
  texto:{
    color: '#2AABDE'
  }

});
