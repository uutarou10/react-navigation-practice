import * as React from 'react';
import {
  View,
  Text
} from 'react-native';

export class TestView extends React.Component {
  static navigationOptions = {
    drawerLabel: 'テスト画面'
  }

  render () {
    return (
      <View>
        <Text>this is test view.</Text>
      </View>
    )
  }
}
