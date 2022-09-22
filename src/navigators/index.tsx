import React, { memo, useMemo } from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import BottomTabs, { BottomTabsParamList } from './BottomTabs';
import NativeStack, { NativeStackParamList } from './NativeStack';

type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  NativeStack: NavigatorScreenParams<NativeStackParamList>;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { headerShown: false };
  }, []);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="BottomTabs" component={BottomTabs} />
      <Screen name="NativeStack" component={NativeStack} />
    </Navigator>
  );
};

export default memo(RootStack);
