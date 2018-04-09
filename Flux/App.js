/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Router, Scenc} from 'react-native-router-flux';
import GrayScreen from './App/GrayScreen';
import GreenScreen from './App/GreenScreen';
import BlackScreen from './App/BlackScreen';
import BlueScreen from './App/BlueScreen';
import GoldScreen from './App/GoldScreen';
import YellowScreen from './App/YellowScreen';
import ModalScreen from './App/ModalScreen';
import PurpleScreen from './App/Purple';
import WhiteScreen from './App/White';

const FirstTabIcon = ({selected, title})=>{
  return(
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
      <Image
          source={require('./App/eye.png')}
          style={{width :28, height: 28, resizeMode: 'contain'}}
        />
      <Text style={{color: selected?'red': 'black'}}>
        {title}
      </Text>
    </View>
  )
}

const SecondTabIcon = ({selected, title})=>{
  return(
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
      <Image
          source={require('./App/qrcode_ic.jpg')}
          style={{width :28, height: 28, resizeMode: 'contain'}}
        />
      <Text style={{color: selected?'red': 'black'}}>
        {title}
      </Text>
    </View>
  )
}
const ThirdTabIcon = ({selected, title})=>{
  return(
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
      <Image
          source={require('./App/menu.png')}
          style={{width :28, height: 28, resizeMode: 'contain'}}
        />
      <Text style={{color: selected?'red': 'black'}}>
        {title}
      </Text>
    </View>
  )
}
const FourTabIcon = ({selected, title})=>{
  return(
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
      <Image
          source={require('./App/menu.png')}
          style={{width :28, height: 28, resizeMode: 'contain'}}
        />
      <Text style={{color: selected?'red': 'black'}}>
        {title}
      </Text>
    </View>
  )
}
export default class App extends Component{
  render() {
    return (
      <Router>
        <Scenc 
        hideNavBar 
        key="root">
          <Scenc
            key="tabbar"
            tabs
            // hideNavBar
            tabBarStyle = {{backgroundColor: 'white'}}
          >
            <Scenc key="first" title="First" icon={FirstTabIcon}>
              <Scenc
                key='gray'
                component = {GrayScreen}
                title = 'Gray'
                initial
                onRight={ ()=> alert('Right') }
                // rightTitle = "Right"
                onLeft = {()=>alert('Left')}
                // leftTitle = "Left"
                leftButtonImage = {require('./App/menu.png')}
                rightButtonImage = {require('./App/eye.png')}
              />
              <Scenc
                key='green'
                component = {GreenScreen}
                title = 'Green'
              />
            </Scenc>
            <Scenc key="second" title="Second" icon={SecondTabIcon}>
              <Scenc
                key='blue'
                component = {BlueScreen}
                title = 'Blue'
              />
              <Scenc
                key='black'
                component = {BlackScreen}
                title = 'Black'
              />
            </Scenc>

            <Scenc key="third" title="Third" icon={ThirdTabIcon}>
              <Scenc
                key='gold'
                component = {GoldScreen}
                title = 'Gold'
              />
              <Scenc
                key='yellow'
                component = {YellowScreen}
                title = 'Yellow'
              />
            </Scenc>





              <Scenc key="four" title="Four" icon={FirstTabIcon}>
              <Scenc
                key='purple'
                component = {PurpleScreen}
                title = 'Purple'
              />
              <Scenc
                key='white'
                component = {WhiteScreen}
                title = 'White'
              />
            </Scenc>
              <Scenc key="five" title="Five" icon={SecondTabIcon}>
              <Scenc
                key='yello'
                component = {YellowScreen}
                title = 'Yello'
              />
              <Scenc
                key='white'
                component = {WhiteScreen}
                title = 'White'
              />
            </Scenc>
            <Scenc key="six" title="Six" icon={ThirdTabIcon}>
              <Scenc
                key='black'
                component = {BlackScreen}
                title = 'Black'
              />
              <Scenc
                key='white'
                component = {WhiteScreen}
                title = 'White'
              />
            </Scenc>

            {/* <Scenc key="third" title="Five" icon={ThirdTabIcon}>
              <Scenc
                key='gold'
                component = {GoldScreen}
                title = 'Gold'
              />
              <Scenc
                key='yellow'
                component = {YellowScreen}
                title = 'Yellow'
              />
            </Scenc> */}
           






          </Scenc>


          <Scenc
            key='modal'
            component = {ModalScreen}
            title = 'Modal'
            direction = "verticale"
          />
        </Scenc>
      </Router>
    );
  }
}

