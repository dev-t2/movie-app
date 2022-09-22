import { DefaultTheme, DarkTheme, Theme as NavigationTheme } from '@react-navigation/native';

type Theme = {};

export type CustomTheme = NavigationTheme & Theme;

export const lightTheme: CustomTheme = {
  ...DefaultTheme,
};

export const darkTheme: CustomTheme = {
  ...DarkTheme,
};
