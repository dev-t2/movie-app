import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Movie, Search, Tv } from '../screens/tabs';

type BottomTabParamList = {
  Movie: undefined;
  Tv: undefined;
  Search: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Navigator>
      <Screen name="Movie" component={Movie} />
      <Screen name="Tv" component={Tv} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default memo(BottomTab);
