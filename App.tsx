import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTabs } from './src/navigators';

const App = () => {
  const [isAssets] = useAssets([]);
  const [isFonts] = useFonts({ ...Ionicons.font });

  const isReady = useMemo(() => isAssets && isFonts, [isAssets, isFonts]);

  useEffect(() => {
    (async () => {
      await preventAutoHideAsync();
    })();
  }, []);

  const onReady = useCallback(async () => {
    if (isReady) {
      await hideAsync();
    }
  }, [isReady]);

  return isReady ? (
    <NavigationContainer onReady={onReady}>
      <BottomTabs />
    </NavigationContainer>
  ) : null;
};

export default memo(App);
