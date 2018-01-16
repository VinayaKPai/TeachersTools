/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
   AppRegistry,
   Text,
   View,
   Button,
   Image,
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';
 import AssgnTestsScreen from './AssgnTestsScreen';
 import StGrpScreen from './StGrpScreen';
 import QuesBankScreen from './QuesBankScreen';
 import Test from './Test';
 import EditStudentsScreen from './EditStudentsScreen';



 class HomeScreen extends React.Component {
   static navigationOptions = {
     title: 'Welcome to your teaching aid',
   };
   render() {
     const { navigate } = this.props.navigation;
     return (
       <View>

         <Image
          source={ require('./assets/icons/logo.png')}
          style={{width: 400, height: 200}}
        />
         <Text>My Student Groups</Text>
         <Text>The entry for editing the classes and student groups</Text>
          <Button
            onPress={() => navigate('StGroups')}
            title="My Student Groups"
          />

          <Text>My Question Bank</Text>

           <Text>The entry for editing the question bank</Text>

           <Button
             onPress={() => navigate('QuesBank')}
             title="My Question Bank"
           />

           <Text>Create Test and Assignmentss</Text>

            <Text>The entry for creating tests and Assignments</Text>

            <Button
              onPress={() => navigate('AssgnTests')}
              title="Create an Assignemnt"
            />
            <Button
              onPress={() => navigate('Test')}
              title="Test"
            />
       </View>
     );
   }
 }




 export const TeachersTools = StackNavigator({
   //LHS is SHort name for calling the class on the RHS
   Home: { screen: HomeScreen },
   StGroups: { screen: StGrpScreen },
   QuesBank: {screen: QuesBankScreen},
   AssgnTests: {screen: AssgnTestsScreen},
   Test: {screen: Test},
   EditStudents: {screen: EditStudentsScreen},
 });

 AppRegistry.registerComponent('TeachersTools', () => TeachersTools);
