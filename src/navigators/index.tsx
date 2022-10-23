import React, { memo, useMemo } from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import BottomTab, { BottomTabParamList } from './BottomTab';

type RootNavigatorParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

const { Navigator, Screen } = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { headerShown: false };
  }, []);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="BottomTab" component={BottomTab} />
    </Navigator>
  );
};

export default memo(RootNavigator);
