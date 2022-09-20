export type ITheme = {
  background: string;
  text: string;
  active: string;
  inactive: string;
};

export const lightTheme: ITheme = {
  background: '#fafafa',
  text: '#000000',
  active: '#1976d2',
  inactive: '#c7c7c7',
};

export const darkTheme: ITheme = {
  background: '#212121',
  text: '#ffffff',
  active: '#1976d2',
  inactive: '#484848',
};
