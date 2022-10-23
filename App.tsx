import React, { memo, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';

import { darkTheme, lightTheme } from './src/theme';
import { Splash } from './src/screens';
import BottomTab from './src/navigators/BottomTab';

const App = () => {
  const colorScheme = useColorScheme();
  const [isAssets] = useAssets([]);
  const [isFonts] = useFonts({ ...Ionicons.font });

  const isReady = useMemo(() => isAssets && isFonts, [isAssets, isFonts]);
  const theme = useMemo(() => (colorScheme === 'light' ? lightTheme : darkTheme), [colorScheme]);

  return !isReady ? (
    <Splash />
  ) : (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <BottomTab />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default memo(App);
