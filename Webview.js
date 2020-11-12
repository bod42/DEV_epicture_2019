import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import { Text, View} from 'react-native';

export default class Weabview extends Component {

    state = {
        isConnected: false,
        jsonStore : [],
        dataSource: [],
        isLoading: true,
        username : "",
        access_token : "",
   }
    getVerif = async (string) => {
        var url = string
        var regex = /[?#&]([^=#]+)=([^&#]*)/g,
            params = {},
            match;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2];
        }
        this.setState({ username: params.account_username,
                        access_token: params.access_token});
      }
    render() {
        const { url }  = this.props.navigation.state.params;
        return (
            <View >
     <WebView
        source={{uri: "https://api.imgur.com/oauth2/authorize?client_id=cd140aebaa436f3&response_type=token"}}
        onNavigationStateChange={(navEvent) => {this.getVerif(navEvent.title)}}
      />
      <Text>lol</Text>
            </View>
        )
    }
}