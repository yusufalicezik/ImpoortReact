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


export default class RegisterLastForm extends Component {
constructor(props){
  super(props)
  this.sendLogin = this.sendLogin.bind(this);

}

state={
  profileName:'......'
}

sendLogin(){
  this.props.navigation.navigate('Login');
}


  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 45 : 0

    return (
      <KeyboardAvoidingView behavior={"position"}
       keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.container}>
            <Text style={styles.loginText}>I am a {this.state.profileName}</Text>
            <View style={styles.TypesView}>
            <MButton buttonText="Investor" mOnPress={()=>{
              this.setState({
                profileName:'Investor'
                });
              }}></MButton>
            <MButton buttonText="Developer" mOnPress={()=>{
              this.setState({
                profileName:'Developer'
                });
              }}></MButton>
            <MButton buttonText="Startup" mOnPress={()=>{
              this.setState({
                profileName:'Startup'
                });
              }}></MButton>
            <MButton buttonText="Just User" mOnPress={()=>{
              this.setState({
                profileName:'Just User'
                });
              }}></MButton>
            </View>
            <View style={styles.sectorView}>
            <TextField placeholderText="Sector" isSecure={false}/>
            </View>
            <View style={styles.buttonView}>
            <MButton buttonText="Finish" mOnPress={this.sendLogin}></MButton>
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
  TypesView:{
    marginBottom: 30,
    marginTop:12
  },
  sectorView:{
    marginTop:20
  },
  buttonView:{
    marginTop:10
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
    color: '#60c4a9'
  }
});
