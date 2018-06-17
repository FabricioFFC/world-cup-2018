import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import TeamsList from './../components/TeamsList';

const styles = StyleSheet.create({
  itemsContainer: {
    backgroundColor: '#f4f5f9',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
  },
});

const HomeScreen = () => (
  <View style={styles.itemsContainer}>
    <TeamsList />
  </View>
);

export default HomeScreen;
