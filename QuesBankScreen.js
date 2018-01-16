import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Picker,
  Component
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';
import {styles} from './styles';

const SECTIONS = [
  {
    title: 'Add a Question',
    content: <View>
    <TextInput
      style={{height: 40}}
      placeholder="Type question here!"
    />
    <TextInput
      style={{height: 40}}
      placeholder="Type answer here!"
    />
    <Button
      onPress={() => navigate('')}
      title='Add Question'/>
    </View>
  },
  {
    title: 'View Existing',
    content: <Text>Lorem ipsum...</Text>
  }
];

export default class QuesBankScreen extends React.Component {
  constructor(props) {
     super(props);
     this.state = {text: ''};
   }

   _renderHeader(section) {
     return (
       <View style={styles.sectionHeader}>
         <Text style={styles.sectionHeaderText}>{section.title}</Text>
       </View>
     );
   }

   _renderContent(section) {
     return (
       <View style={styles.item}>
         {section.content}
       </View>
     );
   }

 static navigationOptions = {
   title: 'Questions database',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (

     <View>

       <Text>Course Questions Main page</Text>
       <Accordion
         sections={SECTIONS}
         renderHeader={this._renderHeader}
         renderContent={this._renderContent}
       />

       <Picker
         selectedValue={this.state.lesson}
         onValueChange={(itemValue, itemIndex) => this.setState({lesson: itemValue})}>
         <Picker.Item label="Lesson 1" value="L1" />
         <Picker.Item label="Lesson 2" value="L2" />
         <Picker.Item label="Lesson 3" value="L3" />
         <Picker.Item label="Lesson 4" value="L4" />
         <Picker.Item label="Lesson 5" value="L5" />
         <Picker.Item label="New Lesson" value="NewLesson" />
       </Picker>
       <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>

        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
         </View>

     </View>
   );
 }
}
