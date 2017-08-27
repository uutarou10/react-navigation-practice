/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {
  TabNavigator
} from "react-navigation";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {PostTopic} from "./PostTopic";
import {TestView} from "./TestView";

const root = TabNavigator({
  home: {
    screen: PostTopic
  },
  test: {
    screen: TestView
  },
  test1: {
    screen: TestView
  },
  test2: {
    screen: TestView
  },
  test3: {
    screen: TestView
  },
});

AppRegistry.registerComponent('navigationSample', () => root);
