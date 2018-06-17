import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import TeamDetails from './../components/TeamDetails';
import teamsApi from '../api/TeamsApi';

class TeamDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.routeParams = props.navigation.state.params; // eslint-disable-line react/prop-types
  }

  async componentWillMount() {
    const team = await teamsApi.get(this.routeParams.teamCode);
    this.setState({ team, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <TeamDetails team={this.state.team} />
    );
  }
}

export default TeamDetailsScreen;
