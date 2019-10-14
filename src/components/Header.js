import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Image
        style={styles.imgStyle}
        source={require('../img/logo.png')}></Image>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle:{
    height: 35,
    width: '40%',
    marginVertical: 10,
    resizeMode:'contain'
  }
});
