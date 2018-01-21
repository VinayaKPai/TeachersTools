import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet } from 'react-native';
import Datastore from 'react-native-local-mongodb';
export default class MyComponent extends Component {

  render() {
    var Datastore = require('react-native-local-mongodb')
    , db = new Datastore({ filename: 'asyncStorageKey', autoload: true });
   //  var doc = { hello: 'world'
   //                 , n: 5
   //                 , today: new Date()
   //                 , reactNativeLocalMongodbIsAwesome: true
   //                 , notthere: null
   //                 , notToBeSaved: undefined  // Will not be saved
   //                 , fruits: [ 'apple', 'orange', 'pear' ]
   //                 , infos: { name: 'react-native-local-mongodb' }
   //                 };
   // db.insert(doc, function (err, docs) {   // Callback is optional
   //   // newDoc is the newly inserted document, including its _id
   //   // newDoc has no key called notToBeSaved since its value was undefined
   // });
var doc = { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false, satellites: ['Phobos', 'Deimos'] };
db.insert(doc, function (err, docs) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
var doc = { _id: 'id4', planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } };
db.insert(doc, function (err, docs) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
var doc = { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true, humans: { genders: 2, eyes: true } };
console.log(doc);
db.insert(doc, function (err, docs) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
var doc = { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false };
console.log(doc);
db.insert(doc, function (err, docs) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
var doc = { _id: 'id5', completeData: { planets: [ { name: 'Earth', number: 3 }, { name: 'Mars', number: 2 }, { name: 'Pluton', number: 9 } ] } };
db.insert(doc, function (err, docs) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
console.log(doc);
  var FoundData = 1;
  console.log(FoundData);
  FoundData = db.find({}, function (err, docs) {
});
// console.log(FoundData);
    return (
        <View style={styles.container}>
          <Text>The found Data is {FoundData}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
