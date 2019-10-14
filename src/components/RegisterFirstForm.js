/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import TextField from '../components/TextField'
import MButton from '../components/MButton'


export default class LoginForm extends Component {
constructor(props){
  super(props)
  this.sendSecondRegister = this.sendSecondRegister.bind(this);
}
sendSecondRegister(){
  this.props.navigation.navigate('RegisterSecond');
}

  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 45 : 0
    return (
      <KeyboardAvoidingView behavior={"position"}
      keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Who are you?</Text>
          <TextField placeholderText="Name" isSecure={false}/>
          <TextField placeholderText="Surname" isSecure={false}/>
          <TextField placeholderText="E Mail" isSecure={false}/>
          <TextField placeholderText="Password" isSecure={true}/>
          <TextField placeholderText="Password Again" isSecure={true}/>
          <View style={styles.buttonView}>
          <MButton buttonText="Next" mOnPress={this.sendSecondRegister}></MButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  buttonView:{
    marginTop: 35
  },
  bottomText:{
    alignSelf:'center',
    color: '#60c4a9'
  },
  loginText:{
    marginTop: 10,
    marginBottom:50,
    alignSelf: 'center',
    textAlign:'center',
    fontSize: 32,
    color: '#60c4a9'
  }
});
