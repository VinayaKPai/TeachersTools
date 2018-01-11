import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class QuesBankScreen extends React.Component {

 static navigationOptions = {
   title: 'Questions database',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (
     <View>
       <Text>Course Questions Main page</Text>
       <Button
         onPress={() => navigate('')}
         title="Add a Question"
       />
     </View>
   );
 }
}
