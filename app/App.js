import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

export default function App() {

  const getSpotifyData = async () => {
    try {
      const response = await axios.get('')
    } catch (err) {

    }

  }

  return (
    <View>
      <Text>Browse</Text>
    </View>
  );
}
