import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import LoginForm from '../components/LoginForm'

export default class Login extends Component {
  render() {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.loginText}>Login</Text>
          <LoginForm navigation={this.props.navigation}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1FA'
  },
  containerScroll: {
    flex: 1,
    backgroundColor: '#F8F1FA'
  },
  loginText:{
    marginTop: 80,
    alignSelf: 'center',
    fontSize: 32,
    color: '#60c4a9'
  }
});
