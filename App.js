import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import {send, subscribe} from 'react-native-training-chat-server';

const NAME = 'Jenna';
const CHANNEL = 'Reactivate';

export default class App extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    subscribe(CHANNEL, messages => {
      this.setState({messages});
    });
  }
  renderItem({item}) {
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  }
  render() {
    return (
      <FlatList data={this.state.messages} renderItem={this.renderItem} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D36B4E',
  },
  message: {
    fontSize: 20,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
    color: '#456B74',
  },
});
