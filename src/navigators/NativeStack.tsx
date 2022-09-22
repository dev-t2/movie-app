import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type NativeStackParamList = {};

const { Navigator, Screen } = createNativeStackNavigator<NativeStackParamList>();

const NativeStack = () => {
  return <Navigator></Navigator>;
};

export default memo(NativeStack);
