import * as React from 'react';
import {
  View,
  Text
} from 'react-native';

export class PostTopic extends React.Component {
  static navigationOptions = {
    drawerLabel: 'トピックを投稿'
  }

  render () {
    return (
      <View>
        <Text>this is post topic</Text>
      </View>
    )
  }
}
