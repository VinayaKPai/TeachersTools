import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class AssgnTestsScreen extends React.Component {
 static navigationOptions = {
   title: 'Questions database',
 };
 render() {
   return (
     <View>
       <Text>Course Questions Main page</Text>
       <Button
         onPress={() => navigate('AssgnTests')}
         title="Create an Assignment"
       />
     </View>
   );
 }
}

// export const AssgnTests = 'AssgnTestsScreen';
// AppRegistry.registerComponent('AssgnTestsScreen', () => AssgnTestsScreen);
