import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Main from './../screens/Main';

export default class Navigation extends React.Component {

    state = {
      index: 0,
      routes: [
        { key: 'main', title: 'Main', icon: 'store' },
      ],
    };
  
    _handleIndexChange = index => this.setState({ index });
  
    _renderScene = BottomNavigation.SceneMap({
      main: Main,
    });
  
    render() {
      return (
          <BottomNavigation
            navigationState={this.state}
            onIndexChange={this._handleIndexChange}
            renderScene={this._renderScene}
          />
      );
    }
  }