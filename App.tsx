import React, { memo, useMemo } from 'react';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import BottomTab from './src/navigators/BottomTab';
import { Splash } from './src/screens';

const App = () => {
  const [isAssets] = useAssets([]);
  const [isFonts] = useFonts({ ...Ionicons.font });

  const isReady = useMemo(() => isAssets && isFonts, [isAssets, isFonts]);

  return isReady ? (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  ) : (
    <Splash />
  );
};

export default memo(App);
