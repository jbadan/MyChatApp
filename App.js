import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import Chat from './Chat';
import UserInput from './UserInput';

class HomeScreen extends React.Component {
  state = {
    name: 'Jenna',
    channel: 'Reactivate'
  };
  static navigationOptions = {
    title: 'Welcome! Lets get started!',
  };
  liftUserInfo = (nameInput, channelInput) => {
    this.setState({
      name: nameInput,
      channel: channelInput
    })
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
            onPress={() => navigate('Detail')}
            title="Recent chats"
          />
        <UserInput name={this.state.name} channel={this.state.channel} lift={this.liftUserInfo}/>
      </View>);
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chats',
  };
  render() {
    return <Chat />;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: ChatScreen }
});

export default SimpleApp;
