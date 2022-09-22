import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';

import { darkTheme, lightTheme } from './src/theme';
import RootNavigator from './src/navigators';

const App = () => {
  const [isAssets] = useAssets([]);

  const [isFonts] = useFonts({ ...Ionicons.font });

  const colorScheme = useColorScheme();

  const isReady = useMemo(() => isAssets && isFonts, [isAssets, isFonts]);

  const theme = useMemo(() => {
    return colorScheme === 'dark' ? darkTheme : lightTheme;
  }, [colorScheme]);

  const style = useMemo<StatusBarStyle>(() => {
    return colorScheme === 'dark' ? 'light' : 'dark';
  }, [colorScheme]);

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
    <ThemeProvider theme={theme}>
      <StatusBar style={style} />

      <NavigationContainer theme={theme} onReady={onReady}>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  ) : null;
};

export default memo(App);
