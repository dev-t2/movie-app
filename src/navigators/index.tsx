import React, { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';
import NativeStack from './NativeStack';

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
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

export default memo(RootNavigator);
