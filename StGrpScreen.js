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

const stuDB = [];


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
                   {data: [{sectionName:'A'}, {sectionName:'D'}], className: 'Std 1'},
                   {data: [{sectionName:'C'}, {sectionName:'B'}], className: 'Std 3'},
                 ]}

                 renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.className}</Text>}


                 renderItem={({section, item}) =>
                 <Button
                   onPress={() => navigate('EditStudents', {parameter1: item, parameter2: section.className})}
                   title={'Edit student list for '+item.sectionName}
                 />}

                 keyExtractor={(item, index) => index}
               />
     </View>
   );
 }
}
