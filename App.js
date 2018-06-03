import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

const countries = [
  { key: 'Alemanha' },
  { key: 'Arábia Saudita' },
  { key: 'Argentina' },
  { key: 'Austrália' },
  { key: 'Bélgica' },
  { key: 'Brasil' },
  { key: 'Colômbia' },
  { key: 'Coreia do Sul' },
  { key: 'Costa Rica' },
  { key: 'Croácia' },
  { key: 'Dinamarca' },
  { key: 'Egito' },
  { key: 'Espanha' },
  { key: 'França' },
  { key: 'Inglaterra' },
  { key: 'Irã' },
  { key: 'Islândia' },
  { key: 'Japão' },
  { key: 'Marrocos' },
  { key: 'México' },
  { key: 'Nigéria' },
  { key: 'Panamá' },
  { key: 'Peru' },
  { key: 'Polônia' },
  { key: 'Portugal' },
  { key: 'Rússia' },
  { key: 'Senegal' },
  { key: 'Sérvia' },
  { key: 'Suécia' },
  { key: 'Suíça' },
  { key: 'Tunísia' },
  { key: 'Uruguai' }
];

class App extends Component {
  render() {
    return (
      <View style={styles.itemsContainer}>
        <View>
          <Text style={styles.header}>Copa do Mundo 2018</Text>
        </View>
        <FlatList
          data={countries}
          numColumns={2}
          renderItem={ ({item}) => <Text style={styles.item}>{item.key}</Text> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
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
  item: {
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 10,
    textAlign: 'center',
  },
});

export default App;
