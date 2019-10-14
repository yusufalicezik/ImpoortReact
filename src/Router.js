
import React, { Component } from 'react';
import{createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Login from './screens/Login';
import Header from './components/Header';
import RegisterFirst from './screens/RegisterFirst';
import RegisterSecond from './screens/RegisterSecond';
import RegisterLast from './screens/RegisterLast';
import { createStackNavigator} from "react-navigation-stack";

const ContactStack = createStackNavigator({
  Login:{
    screen:Login,
  navigationOptions:{
      title:'Login',
       header: <Header/>
    }
  },
  RegisterFirst:{
    screen:RegisterFirst,
    navigationOptions:{
      title:'r1',
      header: <Header/>
    }
  },
  RegisterSecond:{
    screen:RegisterSecond,
    navigationOptions:{
      title:'r1',
      header: <Header/>
    }
  },
  RegisterLast:{
    screen:RegisterLast,
    navigationOptions:{
      title:'r1',
      header: <Header/>
    }
  },
});

export default createAppContainer(ContactStack);
