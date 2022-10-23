import React, { memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Movie, Search, Tv } from '../screens/tabs';

export type BottomTabParamList = {
  Movie: undefined;
  Tv: undefined;
  Search: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  const screenOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarStyle: { paddingTop: 4, paddingBottom: 4 },
      tabBarLabelStyle: { fontWeight: '600' },
    };
  }, []);

  const MovieOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarLabel: 'MOVIE',
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name="md-film" size={size} color={color} />;
      },
    };
  }, []);

  const TvOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarLabel: 'TV',
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name="md-tv" size={size} color={color} />;
      },
    };
  }, []);

  const SearchOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarLabel: 'SEARCH',
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name="md-search" size={size} color={color} />;
      },
    };
  }, []);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Movie" component={Movie} options={MovieOptions} />
      <Screen name="Tv" component={Tv} options={TvOptions} />
      <Screen name="Search" component={Search} options={SearchOptions} />
    </Navigator>
  );
};

export default memo(BottomTab);
