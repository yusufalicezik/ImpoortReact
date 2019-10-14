import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import RegisterFirstForm from '../components/RegisterFirstForm'

export default class RegisterFirst extends Component {
  render() {
    return (
        <ScrollView style={styles.container}>
          <RegisterFirstForm navigation={this.props.navigation}/>
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
  }
});
