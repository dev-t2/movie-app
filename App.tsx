import React, { memo, useMemo } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { Splash } from './src/screens';

const App = () => {
  const [isAssets] = useAssets([]);
  const [isFonts] = useFonts({ ...Ionicons.font });

  const isReady = useMemo(() => isAssets && isFonts, [isAssets, isFonts]);

  return isReady ? (
    <SafeAreaView>
      <Text>Open up App.js to start working on your app!</Text>
    </SafeAreaView>
  ) : (
    <Splash />
  );
};

export default memo(App);
