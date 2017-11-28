import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import {send, subscribe} from 'react-native-training-chat-server';
import ReversedFlatList from 'react-native-reversed-flat-list';
import Header from './Header';


export default class UserInput extends React.Component {
  state = {
    name: this.props.name,
    channel: this.props.channel,
    nameTyping: '',
    channelTyping: ''
  };

  componentDidMount() {

  }

  addUser = () => {
    this.setState({
      name: this.state.nameTyping
    })
  }
  addChannel = () => {
    this.setState({
      channel: this.state.channelTyping
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.state.nameTyping}
              onChangeText={text => this.setState({nameTyping: text})}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="What is your name?"
            />
            <TouchableOpacity onPress={this.addUser.bind(this)}>
              <Text style={styles.send}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.state.channelTyping}
              onChangeText={text => this.setState({channelTyping: text})}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="What channel would you like to join?"
            />
            <TouchableOpacity onPress={this.addChannel.bind(this)}>
              <Text style={styles.send}>Submit</Text>
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
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  rowText: {
    flex: 1,
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
