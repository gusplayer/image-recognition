/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Home from './home';
import Fail from './fail';
import Succes from './succes';

import {Scene, Router} from 'react-native-router-flux';



export default class Led3 extends Component {

  render() {
    return(
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Miràà" hideNavBar={true}/>
        <Scene key="fail" component={Fail} title="Incorrecto"/>
        <Scene key="correcto" component={Succes} title="Contenido" hideNavBar={true} animation/>
      </Scene>
    </Router>
    )
  }

}//end class

AppRegistry.registerComponent('Led3', () => Led3);
