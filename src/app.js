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
import SuccesVideo from './succes';
import SuccesImagen from './succesimagen';
import Instrucciones from './instrucciones';
import Legal from './legal';

import {Scene, Router} from 'react-native-router-flux';


export default class Miraa extends Component {

  render() {
    return(
    <Router>
      <Scene key="root">

        <Scene key="home" component={Home} title="Miràà" hideNavBar={true} initial={true} />
        <Scene key="instrucciones" component={Instrucciones} title="Instrucciones"  hideNavBar={false} animation tabs={true}/>
        <Scene key="legal" component={Legal} title="Legal"  hideNavBar={false}/>
        <Scene key="fail" component={Fail} title="Incorrecto"  hideNavBar={true}/>
        <Scene key="correctoVideo" component={SuccesVideo} title="Contenido" hideNavBar={true} animation/>
        <Scene key="correctoImagen" component={SuccesImagen} title="Correcto" hideNavBar={false} animation/>
      </Scene>
    </Router>
    )
  }

}//end class

AppRegistry.registerComponent('Miraa', () => Miraa);
