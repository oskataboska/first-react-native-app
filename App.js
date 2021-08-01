import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./assets/colors/colors"
import colors from './assets/colors/colors';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
