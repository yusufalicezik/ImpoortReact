import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import RegisterLastForm from '../components/RegisterLastForm'

export default class RegisterLast extends Component {
  render() {
    return (
        <ScrollView style={styles.container}>
          <RegisterLastForm navigation={this.props.navigation}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F1FA'
  },
  containerScroll: {
    backgroundColor: '#F8F1FA'
  },
  loginText:{
    textAlign: 'center',
    marginTop: 80,
    alignSelf: 'center',
    fontSize: 30,
    color: '#60c4a9'
  }
});
