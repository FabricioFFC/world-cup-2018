import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const TeamItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.flag}
        source={{ uri: item.flag }}
      />
      <Text style={styles.item}>{item.name}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  flag: {
    borderWidth: 1,
    borderColor: '#c7c6c6',
    flex: 1,
    height: 22,
    width: 32,
  },
  item: {
    flex: 3,
    paddingLeft: 10,
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 10,
  },
});

export default TeamItem;
