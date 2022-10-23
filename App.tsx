import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <View>
      <StatusBar style="auto" />

      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default memo(App);
