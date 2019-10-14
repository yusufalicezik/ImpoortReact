
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';


export default class TextField extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder={this.props.placeholderText}
        secureTextEntry={this.props.isSecure}
        style={styles.inputStyles}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 25,
    backgroundColor: '#FFFEFF',
    borderRadius: 14,
    marginTop: 12,
    justifyContent: 'center'
  },
  inputStyles:{
    fontSize: 17,
    paddingLeft: 10
  }
});
