/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import TextField from '../components/TextField'
import MButton from '../components/MButton'


export default class LoginForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={"position"}>
          <View style={styles.container}>
            <TextField placeholderText="E mail" isSecure={false}/>
            <TextField placeholderText="Password" isSecure={false}/>
            <View style={styles.buttonView}>
              <MButton buttonText="Login" mOnPress={()=>{
                this.props.navigation.navigate('Home');
                }}></MButton>
            </View>
            <View style={styles.bottomView}>
              <TouchableOpacity onPress={
                ()=>{
                  this.props.navigation.navigate('RegisterFirst');
                }
              }><Text style={styles.bottomText}>Don't have an account?</Text></TouchableOpacity>
              <Text style={styles.bottomText}>Or</Text>
              <TouchableOpacity><Text style={styles.bottomText}>Forgot Password?</Text></TouchableOpacity>
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
  bottomView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  buttonView:{
    marginTop:35
  },
  bottomText:{
    alignSelf:'center',
    color: '#60c4a9'
  }
});
