import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const PARALLAX_HEADER_HEIGHT = 150;
const STICKY_HEADER_HEIGHT = 40;

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  flag: {
    borderWidth: 1,
    borderColor: '#c7c6c6',
    flex: 1,
    height: 22,
    width: 32,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
  },
  stickySectionText: {
    backgroundColor: '#008558',
    color: 'white',
    fontSize: 20,
    height: STICKY_HEADER_HEIGHT,
    paddingLeft: 10,
    paddingTop: 8,
  },
  badgeContainer: {
    flex: 1,
  },
  badge: {
    alignSelf: 'center',
    height: 150,
    justifyContent: 'center',
    marginTop: 20,
    width: 150,
  },
  statsWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  statsContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  statDescription: {
    color: 'gray',
    fontSize: 12,
  },
  statValue: {
    color: '#D64545',
    fontSize: 30,
    fontWeight: 'bold',
  },
  playersWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },
  playerContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
  },
  playerName: {
    color: '#D64545',
    fontSize: 18,
    fontWeight: 'bold',
  },
  playerPosition: {
    color: '#D64545',
    fontSize: 14,
  },
  playerAge: {
    color: '#D64545',
    fontSize: 12,
  },
  playerImage: {
    flex: 1,
    height: 150,
    width: 150,
  },
});

const TeamDetails = ({ team }) => {
  const background = () => (
    <View key="background">
      <Image source={{
        uri: team.profile_image,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT,
      }}
      />
      <View style={{
        position: 'absolute',
        top: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT,
      }}
      />
    </View>
  );

  const sticky = () => (
    <View key="sticky-header" style={styles.stickySection}>
      <Text style={styles.stickySectionText}>{team.name}</Text>
    </View>
  );

  const renderPlayer = player => (
    <View style={styles.playerContainer}>
      <Image
        style={styles.playerImage}
        source={{ uri: player.img }}
      />
      <Text style={styles.playerName}>{player.name}</Text>
      <Text style={styles.playerPosition}>{player.position}</Text>
      <Text style={styles.playerAge}>{player.age}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ParallaxScrollView
        backgroundColor="black"
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        renderBackground={background}
        renderStickyHeader={sticky}
      >
        <View style={styles.badgeContainer}>
          <Image
            style={styles.badge}
            source={{ uri: team.badge }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.statsWrapper}>
          <View style={styles.statsContainer}>
            <Text style={styles.statValue}>{team.stats.rank}</Text>
            <Text style={styles.statDescription}>Ranking na FIFA</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statValue}>{team.stats.appearances}</Text>
            <Text style={styles.statDescription}>Presenças na Copa</Text>
          </View>
        </View>
        <View style={styles.statsWrapper}>
          <View style={styles.statsContainer}>
            <Text style={styles.statValue}>{team.stats.titles}</Text>
            <Text style={styles.statDescription}>Títulos</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statValue}>{team.stats.semifinals}</Text>
            <Text style={styles.statDescription}>Semifinais</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statValue}>{team.stats.final}</Text>
            <Text style={styles.statDescription}>Finais</Text>
          </View>
        </View>
        <View style={styles.playersWrapper}>
          <FlatList
            data={team.players}
            numColumns={2}
            keyExtractor={item => item.name}
            renderItem={({ item }) => renderPlayer(item)}
          />
        </View>
      </ParallaxScrollView>
    </View>
  );
};

TeamDetails.propTypes = {
  team: PropTypes.shape({
    flag: PropTypes.string,
    name: PropTypes.string,
    code: PropTypes.string,
  }).isRequired,

};

export default TeamDetails;
