import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [assets] = useAssets([]);
  const [fonts] = useFonts(Ionicons.font);

  const appIsReady = useMemo(() => assets && fonts, [assets, fonts]);

  useEffect(() => {
    (async () => {
      await preventAutoHideAsync();
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await hideAsync();
    }
  }, [appIsReady]);

  return appIsReady ? <View onLayout={onLayoutRootView} /> : null;
};

export default memo(App);
