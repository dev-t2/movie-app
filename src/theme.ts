import { DefaultTheme, DarkTheme, Theme as NavigationTheme } from '@react-navigation/native';

const theme = {
  colors: {},
};

export type CustomTheme = NavigationTheme & typeof theme;

export const lightTheme: CustomTheme = {
  ...DefaultTheme,
  ...theme,
  colors: { ...DefaultTheme.colors, ...theme.colors },
};

export const darkTheme: CustomTheme = {
  ...DarkTheme,
  ...theme,
  colors: { ...DarkTheme.colors, ...theme.colors },
};
