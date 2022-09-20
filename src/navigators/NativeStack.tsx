import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

const NativeStack = () => {
  return <Navigator></Navigator>;
};

export default memo(NativeStack);
