import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { BottomTabs, NativeStack } from './src/navigators';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  const colorScheme = useColorScheme();

  const [isAssets] = useAssets([]);

  const [isFonts] = useFonts({ ...Ionicons.font });

  const isReady = useMemo(() => isAssets && isFonts, [isAssets, isFonts]);

  const isDarkMode = useMemo(() => colorScheme === 'dark', [colorScheme]);

  const theme = useMemo(() => (isDarkMode ? DarkTheme : DefaultTheme), [isDarkMode]);

  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { headerShown: false };
  }, []);

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
      <Navigator screenOptions={screenOptions}>
        <Screen name="BottomTabs" component={BottomTabs} />
        <Screen name="NativeStack" component={NativeStack} />
      </Navigator>
    </NavigationContainer>
  ) : null;
};

export default memo(App);
