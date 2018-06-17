import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { withNavigation } from 'react-navigation';

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

const TeamItem = ({ item, navigation }) => {
  const goToDetails = teamCode => navigation.navigate('TeamDetails', { teamCode });

  return (
    <TouchableOpacity onPress={() => goToDetails(item.code)} style={styles.itemContainer}>
      <Image
        style={styles.flag}
        source={{ uri: item.flag }}
      />
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  );
};

TeamItem.propTypes = {
  item: PropTypes.shape({
    flag: PropTypes.string,
    name: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

TeamItem.defaultProps = {
  navigation: undefined,
};

export default withNavigation(TeamItem);
