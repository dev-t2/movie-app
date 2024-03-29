import React, { memo, useMemo } from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import BottomTabs, { BottomTabsParamList } from './BottomTabs';

type RootNavigatorParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
};

const { Navigator, Screen } = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { headerShown: false };
  }, []);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="BottomTabs" component={BottomTabs} />
    </Navigator>
  );
};

export default memo(RootNavigator);
