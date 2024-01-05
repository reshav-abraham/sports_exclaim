import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import * as React from 'react';
import EventsScreen from './Events';

export default function App() {
  return (
    <>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <MyComponent></MyComponent>
    </>
  );
}

const DiscoverScreen = () => {

  return (
    <Text>Discover</Text>
  );
}

const AccountSettingsScreen = () => {

  return (
    <Text>Account</Text>
  );
}


const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  // https://icon-sets.iconify.design/mdi
  const [routes] = React.useState([
    { key: 'events', title: 'Events', icon: 'handball' },
    { key: 'discover', title: 'Discover', icon: 'unicorn-variant' },
    { key: 'account', title: 'Account', icon: 'cog-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    events: EventsScreen,
    discover: DiscoverScreen,
    account: AccountSettingsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
