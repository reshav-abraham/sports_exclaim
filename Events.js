import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const EventsScreen = () => {
    const [data, setData] = React.useState("");
    const [events, setEvents] = React.useState("");
  
    // Load Events
    React.useEffect(() => {
      fetch("http://192.168.1.248:8888/events").then(response => response.json()).then(json => {
        setEvents(json.events);
      })
    }, []); // load events on initial render
  
    React.useEffect(() => {
      // Update the document title using the browser API
      let stuff = data ? data : "nope";
      console.log("this is the data:", stuff);
    }, [data]);
  
    function onPressLearnMore() {
      // fetch("https://192.168.1.66:8888")
      console.log('yoyoyo!')
      fetch("http://192.168.1.248:8888/basic").then(response => response.json()).then(json => {
        setData(json.movies);
      })
      return ""
    }
    return (
      <>
        <Text>Music</Text>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{data ? data : "1234"}</Text>
        <Text>{events ? JSON.stringify(events) : "No Events!"}</Text>
      </>
    );
  };

export default EventsScreen;