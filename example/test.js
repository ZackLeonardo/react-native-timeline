import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';

import Timeline from '@zdy/react-native-timeline';

class TestChild extends Component{
  render(){
    return (
      <View >
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default class Test extends Component{
  constructor(props){
    super(props);

    this._renderChildren = this._renderChildren.bind(this);
  }

  _renderChildren(item){
    return (
      <TestChild  text={item.title}/>
    );
  }

  render(){
    return (
      <View>
        <Timeline
          ref='TestFather'

          renderChildren = {this._renderChildren}
         />
        <Button
          onPress={()=> {this.refs.TestFather.scrollToIndex({animated: true, index: 3})}}
          title="Press Me" />
      </View>

    );
  }
}
