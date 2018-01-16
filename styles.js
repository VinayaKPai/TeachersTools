import React from 'react';
import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    backgroundColor: 'steelblue',
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
  },
  itemText: {
    fontSize: 18,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: 300,
    height: 300,
    opacity: 0.750,
    marginTop: 150,
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalView: {
    height: 300,
  }
})
