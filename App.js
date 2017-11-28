import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import Chat from './Chat';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome! Lets get started!',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
            onPress={() => navigate('Detail')}
            title="Recent chats"
          />
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
