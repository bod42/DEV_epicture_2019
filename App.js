import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home'
import Compte from './Compte';
import Allimages from './Allimages';
import Webview from './Webview';
import Favori from './Favori';

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Webview: {screen: Webview,
      params: { url: 'https://api.imgur.com/oauth2/authorize?client_id=cd140aebaa436f3&response_type=token' },
     },
    Profile: {screen: Compte},
    Image: {screen: Allimages},
    Favori: {screen: Favori},
  });

  const App = createAppContainer(MainNavigator);

  const Medium = () => {
    return <App />
  }
  export default App;