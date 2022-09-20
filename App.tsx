import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';

import { darkTheme, lightTheme } from './src/theme';
import { BottomTabs } from './src/navigations';

const App = () => {
  const colorScheme = useColorScheme();

  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);

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
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer onReady={onReady}>
        <BottomTabs />
      </NavigationContainer>
    </ThemeProvider>
  ) : null;
};

export default memo(App);
