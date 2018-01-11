import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  SectionList,
  Header,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
 import {styles} from './styles';

export default class StGrpScreen extends React.Component {
 static navigationOptions = {
   title: 'My Student Groups',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (
     <View>
       <Text>Select a Std</Text>
       <Text>List of my classes and sections</Text>
       <SectionList
                 sections={[
                   {title: 'Std 1', data: ['A', 'D']},
                   {title: 'Std 3', data: ['A', 'B']},
                 ]}
                 renderItem={({item}) =>
                 <Button
                   onPress={() => navigate()}
                   title={'Edit student list for '+item}
                 />}
                 renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                 keyExtractor={(item, index) => index}
               />
     </View>
   );
 }
}
