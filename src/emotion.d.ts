import '@emotion/react';

import { ITheme } from './theme';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
