import React from 'react';

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const RootStack = createBottomTabNavigator(
  {
    Welcome: WelcomeScreen,
    Auth: AuthScreen,
    Main: createBottomTabNavigator({
      Map: MapScreen,
      Deck: DeckScreen,
      Review: createStackNavigator({
        ReviewHome: { screen: ReviewScreen },
        Settings: { screen: SettingsScreen }
      })
    })
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    lazy: true
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
