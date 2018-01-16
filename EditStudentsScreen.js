import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class EditStudentsScreen extends React.Component {
 static navigationOptions = {
   title: 'Student Database',
 };
 render() {
   const { params } = this.props.navigation.state;
   return (
     <View>
     <Text>This is a standard Roll for a class or section</Text>
       <Text>We land here from the My Student Groups Screen by clicking on any of the Edit Student List Buttons</Text>
       <Text>Trying to display this dot props dot navigation dot state - {params.parameter2 + params.parameter1.sectionName}</Text>
     </View>
   );
 }
}
