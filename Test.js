import React from 'react';
import { AppRegistry,
Text,
View,
Button,
Image,
TextInput,
Picker,
Component } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {styles} from './styles';


export default class Test extends React.Component {
//removed 'const' here as it was giving error and the app loaded without
//error on this line
//However, clicking on the Test button gives error on render function
   PARTS = [
    {
      title: 'First',
      content: 'Lorem ipsum...'
    },
    {
      title: 'Second',
      content: 'Lorem ipsum...'
    }
  ];

  _renderHeader(section) {
    return (
      <View style={styles.sectionHeader}>
        <Text >{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.item}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <Accordion
        parts={PARTS}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}
