import React, {Component} from 'react';
import { StyleSheet, Text, View, Image , ScrollView} from 'react-native';
import axios from 'axios';

export default class Favori extends Component {

    state = {
        jsonStore : [],
   }
   componentWillMount() {
   this.state.jsonStore.data = []
   }

   componentDidMount() {
    this.getImage();
 }
    getImage()
    {
       axios({
          method: "get",
          url : 'https://api.imgur.com/3/account/baniste/favorites',
          headers : {"authorization" : "Client-ID cd140aebaa436f3"}})
          .then((response) => {
            this.setState({jsonStore: response.data})
          })
          .catch(function (error) {
             console.log(error);
          });
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                 {this.state.jsonStore.data.map((object, index, index2) => {
                  return (
                  <View key={index}>
                    <Text key={index2}>{object.name}</Text>
                    <Image key={index} source={{uri: object.link}}
                      style={styles.image} />
                  </View>
                  )
                })}
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 500,
    },
    image: {
      flex: 1,
      width: 400,
      height: 400,
    },
  });