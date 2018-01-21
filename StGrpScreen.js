import React from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Image,
  SectionList,
  FlatList,
  Header,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './styles';
import Accordion from 'react-native-collapsible/Accordion';
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

const SECTIONS = [
  // {
  //   title:'B',
  //   content:
  //   <View>
  //     <Text>id: 'sid19', name: 'Keshav'</Text>
  //     <Text>id: 'sid20', name: ''</Text>
  //     <Text>id: 'sid21', name: ''</Text>
  //     <Text>id: 'sid22', name: ''</Text>
  //     <Text>id: 'sid23', name: ''</Text>
  //     <Text>id: 'sid24', name: 'Kavya'</Text>
  //     </View>
  //   },
    {
    content:
    (<SectionList
        sections= {stuDB}
        renderSectionHeader={
          ({section, item}) => <Text style={styles.sectionHeader}>{section.className} - {section.students}</Text>
        }

        renderItem={({section, item}) =>
          <Text>
              <Text>{item.sectionName}</Text>
              <Text>students={({section, item}) =>{section.students}}</Text>
          </Text>
        }

        keyExtractor={(item, index) => index}
     />),
     title: '{section.className}',
   }
];

export default class StGrpScreen extends React.Component {
  constructor(props) {
     super(props);
     this.state = {text: ''};
   }
//renders accordion header
   _renderHeader(section) {
     return (
       <View style={styles.sectionHeader}>
         <Text style={styles.sectionHeaderText}>{section.title}</Text>
       </View>
     );
   }
//renders accordion content
   _renderContent(section, item) {
     return (
       <View style={styles.item}>
         {section.content}
       </View>
     );
   }
 static navigationOptions = {
   title: 'My Student Groups',
 };

 render() {
   const { navigate } = this.props.navigation;

   return (

     <View>

       <Text>View or Edit roll call</Text>
       <SectionList
           sections= {stuDB}

           renderSectionHeader={
             ({section}) => <Text style={styles.sectionHeader}>{section.className}</Text>
           }


           renderItem={
             ({section, item}) =>                    <Button
               onPress={() => navigate('EditStudents', {parameter2: item, parameter1: section.className})}
               title={'Edit student list for '+item.sectionName}
             />
           }

           keyExtractor={(item, index) => index}
        />

        <Accordion
          sections={SECTIONS}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
        <Text>End of Page </Text>
     </View>
   );
 }
}
