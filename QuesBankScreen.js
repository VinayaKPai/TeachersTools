import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Picker,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class QuesBankScreen extends React.Component {
  constructor(props) {
     super(props);
     this.state = {text: ''};
   }
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
       <Button
         onPress={() => navigate('')}
         title="View Existing"
       />
       <Picker
         selectedValue={this.state.language}
         onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
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
          <Button
            onPress={() => navigate('')}
            title="Add Now"
          />
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
