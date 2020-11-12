import React, {Component} from 'react';
import { Text, Button, StyleSheet, View, Image, ScrollView} from 'react-native';

export default class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.titleText}>       Epicture by epitech</Text>
        <Image source={require('./logo.png')}
                      style={{bottom: 290,width: 330,
                        height: 300,}} />
        <Text style={styles.Text}>     pour commencer s'il vous plaît scroller vers le bas &#8650;</Text>
        <View style = {styles.button}>
        <Button   title="    page d'accueil    "
          onPress={() => navigate('Image')}/>
        <Button  title="     mon compte    "
          onPress={() => navigate('Profile')}/>
        <Button  title="      Favori     "
          onPress={() => navigate('Favori')}/>
    </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingVertical: 500,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    bottom: 380,
  },
  Text: {
    fontSize: 15,
    bottom: 250,
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
    position: 'absolute',
    bottom: 5
  }
});