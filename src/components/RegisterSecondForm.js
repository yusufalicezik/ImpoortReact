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
  this.sendLastRegister = this.sendLastRegister.bind(this);
}
sendLastRegister(){
  this.props.navigation.navigate('RegisterLast');
}

  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 45 : 0
    return (
      <KeyboardAvoidingView behavior={"position"}
      keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.container}>
          <Text style={styles.loginText}>What is your personal information?</Text>

            <TextField placeholderText="Phone Number" isSecure={false}/>
            <TextField placeholderText="City" isSecure={false}/>
            <TextField placeholderText="Date of Birth/Established" isSecure={false}/>
            <TextField placeholderText="Gender (Optional)" isSecure={false}/>
            <View style={styles.buttonView}>
            <MButton buttonText="Next" mOnPress={this.sendLastRegister}></MButton>
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
    fontSize: 32,
    textAlign:'center',
    color: '#60c4a9'
  }
});
