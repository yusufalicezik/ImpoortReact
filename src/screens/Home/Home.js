/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image

} from 'react-native';
import data from './data';


export default class Home extends Component {
  state = {
    text : '',
    contacts:data
  }

  renderItem = ({ item, index }) => {
      return(
        <TouchableOpacity style={styles.itemContainer}>
        <View style = {styles.personal}>
        <Image
          style={styles.avatar}
          source={{ uri: item.picture }} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.company}</Text>
        </View>
        </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.desctiptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia, est accumsan bibendum vestibulum, neque sapien venenatis turpis, eget bibendum arcu augue semper turpis. Donec condimentum felis eu ligula varius, quis auctor arcu suscipit. Duis euismod, ante vel aliquam mollis, justo diam scelerisque velit, id facilisis metus augue consequat tortor. Morbi vitae varius eros. Nam nisl lectus, lacinia quis tristique eget, ullamcorper et felis. Fusce malesuada nibh eu massa auctor, nec eleifend augue consectetur. Morbi quam augue, sagittis luctus bibendum sit amet, placerat at nisl.
            </Text>
          </View>

          <View style={styles.bottomButonsContainer}>
            <TouchableOpacity>
                <Image style = {styles.imageContainer} source={require('./img/like.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style = {styles.imageContainer} source={require('./img/comment.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style = {styles.imageContainer} source={require('./img/watch.png')} />
            </TouchableOpacity>

          </View>
        </TouchableOpacity>
      )
    };





  render() {
    return (
      <SafeAreaView style = {styles.container}>

        <FlatList backgroundColor = '#F8F1FA'
        renderItem={this.renderItem} keyExtractor={item => item._id} data={this.state.contacts}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer:{
    width: 17,
    height: 17
  },
  bottomButonsContainer:{
    paddingTop: 10,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  personal:{
    flexDirection: 'row'
  },
  desctiptionText:{
    paddingHorizontal: 12,
    paddingTop: 12
  },
  descriptionContainer:{

  },
  container:{
    flex:1,
    marginTop: 12,
    backgroundColor:'#F8F1FA'
  },
	itemContainer: {
		flex: 1,
		paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 8,
    marginHorizontal: 15

	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginHorizontal: 10
	},
	textContainer: {
		justifyContent: 'center'
	},
	name: {
		fontSize: 14
	},
  searchContainer:{
    padding:10
  },
  searchInput:{
    fontSize:16,
    backgroundColor:'#f7f7f9',
    padding:13,
    borderRadius:12
  }
});
