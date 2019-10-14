/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

export default class MButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.mOnPress}>
        <Text style={styles.buttonStyle}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 25,
    marginTop: 5,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#60c4a9'
  },
  buttonStyle:{
    color: 'white',
    fontSize: 17
  }
});
