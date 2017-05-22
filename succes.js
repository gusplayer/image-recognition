
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import YouTube from 'react-native-youtube';

export default class fail extends Component {

  render(){
    return(
      <View style={styles.container}>



          <YouTube
                ref={(component) => {
                  this._youTubePlayer = component;
                }}
                apiKey="AIzaSyAaiBfx9dGB2HEqO2n96xHFkinf204wzng"
                videoId="aRRdSgmGYZ0"   // A playlist's ID, overridden by `videoId`
                play={true}                      // control playback of video with true/false
                fullscreen={true}               // control whether the video should play in fullscreen or inline
                loop={true}                     // control whether the video should loop when ended
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                onProgress={e => this.setState({ currentTime: e.currentTime, duration: e.duration })}
                showFullscreenButton={false}
                fullscreen={true}

                style={{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10 }}
        />

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
  }

});
