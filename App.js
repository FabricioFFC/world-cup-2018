import { createStackNavigator } from 'react-navigation';

import Home from './src/screens/Home';
import TeamDetails from './src/screens/TeamDetails';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    TeamDetails: {
      screen: TeamDetails,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Copa do Mundo 2018',
      headerStyle: {
        backgroundColor: '#D64545',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
