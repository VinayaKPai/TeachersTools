import React from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity ,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './styles';

export default class EditStudentsScreen extends React.Component {
 static navigationOptions = {
   title: 'Student Database',
 };

 state = {
    modalVisible: false,
    activeItemId: null,
    activeItem: null,
    activeItemName: null,
    text: null,
  };

  openModal(item) {
    this.setState({modalVisible:true});
    this.setState({activeItemId:item.id});
    this.setState({activeItemName:item.name});
  }

  closeModal() {
    this.setState({modalVisible:false});
    this.setState({activeItemId:null});
  }

  submitChanges(params) {
    params.parameter2.students[3].name=this.state.text;
    this.setState({modalVisible:false});
    //this.setState({activeItemId:null});
  }

  getIndex(value, arr, prop) {
      for(var i = 0; i < arr.length; i++) {
          if(arr[i][prop] === value) {
              return i;
          }
      }
      return -1; //to handle the case where the value doesn't exist
    }


 render() {
   const { params } = this.props.navigation.state;

   return (
     <View>
     <Text>This is a standard Roll for a class or section</Text>
       <Text>We land here from the My Student Groups Screen by clicking on any of the Edit Student List Buttons</Text>
       <Text>{this.state.text}</Text>
       <Text>{params.parameter1 +' - ' + params.parameter2.sectionName}</Text>
       <FlatList
          data={params.parameter2.students}
          extraData = {this.state}
          renderItem={({item}) =>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
          <Text>{item.id}</Text>
          <Text>{item.name}</Text>
          <TouchableOpacity onPress={() => this.openModal(item)}>
            <Text>Edit {item.id}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Delete</Text>
          </TouchableOpacity>
          </View>}

          keyExtractor={(item, index) => index}
        />

        <View style={styles.container}>
         <Modal
             visible={this.state.modalVisible}
             animationType={'slide'}
             onRequestClose={() => this.closeModal()}
         >
           <View style={styles.modalContainer}>
             <View style={styles.innerContainer}>
               <Text>This is content inside of modal component</Text>
               <Text>{params.parameter1 +' - ' + params.parameter2.sectionName} - {this.state.activeItemId} - {this.state.activeItemName}</Text>
               <TextInput
                 style={{width: 140}}
                 placeholder="Type here!"
                 onChangeText={(text) => this.setState({text})}
               />
               <Button
                   onPress={() => this.closeModal()}
                   title="Cancel"
               />
               <Button
                   onPress={() => this.submitChanges(params)}
                   title="Submit"
               />

             </View>
           </View>
         </Modal>

       </View>
     </View>


   );


 }
}
