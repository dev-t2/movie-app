export type ITheme = {
  primary: string;
  backgroundColor: string;
  color: string;
  inactive: string;
};

export const lightTheme: ITheme = {
  primary: '#1976d2',
  backgroundColor: '#fafafa',
  color: '#000000',
  inactive: '#c7c7c7',
};

export const darkTheme: ITheme = {
  primary: '#1976d2',
  backgroundColor: '#212121',
  color: '#ffffff',
  inactive: '#484848',
};
