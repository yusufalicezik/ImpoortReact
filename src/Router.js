
import React, { Component } from 'react';
import{createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import Login from './screens/Login';
import Header from './components/Header';
import RegisterFirst from './screens/RegisterFirst';
import RegisterSecond from './screens/RegisterSecond';
import RegisterLast from './screens/RegisterLast';
import Home from './screens/Home/Home';
import { createStackNavigator} from "react-navigation-stack";

import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(<Icon name="ios-home" size={20} color={tintColor}/>)
    }
  },
  Search:{
    screen:RegisterLast,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(<Icon name="ios-search" size={20} color={tintColor}/>)
    }
  },
  Share:{
    screen:RegisterLast,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(<Icon name="ios-add-circle-outline" size={20} color={tintColor}/>)
    }
  },
  Watching:{
    screen:RegisterLast,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(<Icon name="ios-eye" size={20} color={tintColor}/>)
    }
  },
  Profile:{
    screen:RegisterLast,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintColor})=>(<Icon name="ios-person" size={20} color={tintColor}/>)
    }
  }
  },{
  tabBarOptions:{
    activeTintColor:'#60c4a9',
    showLabel:true,
    inactiveTintColor:'#4c5b6a',
    style: {
      backgroundColor:'#F8F1F7'
    }
  }
});


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
  Home:{
    screen:TabNavigator,
    navigationOptions:{
      title:'hms',
      header: <Header/>
    }
  },

});




export default createAppContainer(ContactStack);
