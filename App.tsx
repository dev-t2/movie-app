import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [isAssets] = useAssets([]);
  const [isFonts] = useFonts({ ...Ionicons.font });

  const isReady = useMemo(() => isAssets && isFonts, [isAssets, isFonts]);

  useEffect(() => {
    (async () => {
      await preventAutoHideAsync();
    })();
  }, []);

  const onLayout = useCallback(async () => {
    if (isReady) {
      await hideAsync();
    }
  }, [isReady]);

  return isReady ? <View onLayout={onLayout} /> : null;
};

export default memo(App);
