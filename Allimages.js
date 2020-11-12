import React, {Component} from 'react';
import {StyleSheet, Text, Button, View, Image , ScrollView} from 'react-native';
import axios from 'axios';

export default class Allimages extends Component {

    state = {
        imageLoaded: false,
        jsonStore : [],
   }
   componentDidMount() {
    this.getAllImage();
 }
    getAllImage = async(e) => {
        var self = this;
        var myInit = {
           method: 'GET',
           headers: {
               "Authorization": "Client-ID cd140aebaa436f3"
           },
           mode: 'cors',
           cache: 'default'
        };
        fetch("https://api.imgur.com/3/gallery/hot/top/1?showViral=true&mature=true", myInit).then((response) => {
           response.json().then(((data) => {
           var i = 0;
           var jsonStore = []
           while (data.data[i]) {
              if (data.data[i].hasOwnProperty('images')) {
                 if (data.data[i].images[0].link.includes(".png") || data.data[i].images[0].link.includes(".jpg")) {
                    jsonStore.push({ "link": data.data[i].images[0].link, "title": data.data[i].title, "key": i, height: data.data[i].images[0].height, width: data.data[i].images[0].width, id: data.data[i].images[0].id })
                 }
              }
              i = i + 1;
           }
           this.setState({ jsonStore: jsonStore, imageLoaded : true })
           }))
       }).catch((err) => {
           console.log('Error: ', err)
       })
     }

     setFavori(string) {
      var str = string.substring(20, 27);
      axios({
        method: "post",
        url : `https://api.imgur.com/3/image/${str}/favorite`,
        headers : {"authorization" : "Client-ID cd140aebaa436f3"}}).catch((err) => {
          console.log('Error: ', err)
      })

     }
    render() {
      const {navigate} = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                 {this.state.jsonStore.map((object, index, index2) => {
                  return (
                  <View key={index}>
                    <Text key={index2}>{object.title}</Text>
                    <Image key={index} source={{uri: object.link}}
                      style={styles.image} />
                       <Button  style={styles.button} title="mettre en favori"
          onPress={() => this.setFavori(object.link)}/>
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
    button: {
      flex: 1,
      flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
      color : 'blue',
    }
  });