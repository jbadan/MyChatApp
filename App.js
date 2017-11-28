import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {send, subscribe} from 'react-native-training-chat-server';

const NAME = 'Jenna';
const CHANNEL = 'Reactivate';

export default class App extends React.Component {
  state = {
    messages: [],
    typing: "",
  };

  componentDidMount() {
    subscribe(CHANNEL, messages => {
      this.setState({messages});
    });
  }
  async sendMessage() {
  // send message to our channel, with sender name.
  // the `await` keyword means this function execution
  // waits until the message is sent
  await send({
    channel: CHANNEL,
    sender: NAME,
    message: this.state.typing
  });

  // set the component state (clears text input)
  this.setState({
    typing: '',
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
      <View style={styles.container}>
        <FlatList data={this.state.messages} renderItem={this.renderItem} />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.state.typing}
              onChangeText={text => this.setState({typing: text})}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Type something nice"
            />
            <TouchableOpacity onPress={this.sendMessage.bind(this)}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
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
  footer: {
  flexDirection: 'row',
  backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 20,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});
