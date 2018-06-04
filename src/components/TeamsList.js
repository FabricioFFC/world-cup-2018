import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';

import TeamItem from './TeamItem';
import teamsApi from '../api/TeamsApi';

class TeamsList extends Component {
  state = { countries: [], loading: true };

  async componentDidMount() {
    const countries = await teamsApi.getAll();
    this.setState({ countries, loading: false });
  }
  render() {
    if (this.state.loading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <FlatList
        data={this.state.countries}
        numColumns={2}
        keyExtractor={ (item) => item.code }
        renderItem={ ({item}) => <TeamItem item={item}/> }
      />
    );
  }
}

export default TeamsList;
