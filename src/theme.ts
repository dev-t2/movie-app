import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

export interface ITheme extends Theme {}

export const lightTheme: ITheme = {
  ...DefaultTheme,
};

export const darkTheme: ITheme = {
  ...DarkTheme,
};
