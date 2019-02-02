import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends React.Component {
  _goBack = () => alert('Went back');

  _onSearch = () => alert('Searching');

  _onMore = () => alert('Shown more');

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title="Time Spending"
          subtitle="WTF is my time"
        />
        <Appbar.Action icon="search" onPress={this._onSearch} />
        <Appbar.Action icon="more-vert" onPress={this._onMore} />
      </Appbar.Header>
    );
  }
}