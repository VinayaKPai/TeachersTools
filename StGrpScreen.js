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

const stuDB = [
  {
    className: 'Std 1',
    data:
    [
      {
        sectionName:'A',
        students:
        [
          {id: 'sid1', name: 'Aditya'},
          {id: 'sid2', name: ''},
          {id: 'sid3', name: ''},
          {id: 'sid4', name: ''},
          {id: 'sid5', name: ''},
          {id: 'sid6', name: ''},
        ],
      },
      {
        sectionName:'D',
        students:
        [
          {id: 'sid7', name: 'Abhijit'},
          {id: 'sid8', name: ''},
          {id: 'sid9', name: ''},
          {id: 'sid10', name: ''},
          {id: 'sid11', name: ''},
          {id: 'sid12', name: ''},
        ],
      }
    ],
  },//end std1

  {
    className: 'Std 3',
    data:
    [
      {
        sectionName:'C',
        students:
        [
          {id: 'sid13', name: 'Vinaya'},
          {id: 'sid14', name: ''},
          {id: 'sid15', name: ''},
          {id: 'sid16', name: ''},
          {id: 'sid17', name: ''},
          {id: 'sid18', name: ''},
        ],
      },
      {
        sectionName:'B',
        students:
        [
          {id: 'sid19', name: 'Keshav'},
          {id: 'sid20', name: ''},
          {id: 'sid21', name: ''},
          {id: 'sid22', name: ''},
          {id: 'sid23', name: ''},
          {id: 'sid24', name: 'Kavya'},
        ],
      }
    ],
  },//end std2
];


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
                 sections= {stuDB}

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
