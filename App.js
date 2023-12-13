import React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import AppTab from './AppTab';
 
export default function App() {
  return (
    <View style={Styles.container}>
      <MapsView style={Styles.map}/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  map: {
  width: '100%',
  height: '100%',
  },
  });
  