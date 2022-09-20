import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Movie, Search, Tv } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Navigator initialRouteName="Movie">
      <Screen name="Movie" component={Movie} />
      <Screen name="Tv" component={Tv} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default memo(BottomTabs);
