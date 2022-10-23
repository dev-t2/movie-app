import React, { memo, useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

preventAutoHideAsync();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await new Promise((resolve: (value?: any) => void) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(async () => {
    if (isReady) {
      await hideAsync();
    }
  }, [isReady]);

  return isReady ? (
    <View onLayout={onLayout}>
      <StatusBar style="auto" />

      <Text>Open up App.js to start working on your app!</Text>
    </View>
  ) : null;
};

export default memo(App);
