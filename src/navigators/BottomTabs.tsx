import React, { memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Movie, Search, Tv } from '../screens';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabs = () => {
  const screenOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarLabelStyle: {
        fontWeight: '600',
        marginTop: -4,
      },
    };
  }, []);

  const movieOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarLabel: 'MOVIE',
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name="film-outline" size={size} color={color} />;
      },
    };
  }, []);

  const tvOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarLabel: 'TV',
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name="tv-outline" size={size} color={color} />;
      },
    };
  }, []);

  const searchOptions = useMemo<BottomTabNavigationOptions>(() => {
    return {
      tabBarLabel: 'SEARCH',
      tabBarIcon: ({ size, color }) => {
        return <Ionicons name="search-outline" size={size} color={color} />;
      },
    };
  }, []);

  return (
    <Navigator initialRouteName="Movie" screenOptions={screenOptions}>
      <Screen name="Movie" component={Movie} options={movieOptions} />
      <Screen name="Tv" component={Tv} options={tvOptions} />
      <Screen name="Search" component={Search} options={searchOptions} />
    </Navigator>
  );
};

export default memo(BottomTabs);
