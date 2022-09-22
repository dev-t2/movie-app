import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { darkTheme, lightTheme } from './src/theme';
import RootNavigator from './src/navigators';

const App = () => {
  const [isAssets] = useAssets([]);

  const [isFonts] = useFonts({ ...Ionicons.font });

  const colorScheme = useColorScheme();

  const isReady = useMemo(() => isAssets && isFonts, [isAssets, isFonts]);

  const theme = useMemo(() => (colorScheme === 'dark' ? darkTheme : lightTheme), [colorScheme]);

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
    <NavigationContainer theme={theme} onReady={onReady}>
      <RootNavigator />
    </NavigationContainer>
  ) : null;
};

export default memo(App);
