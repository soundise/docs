import 'styled-components';
import type { ITheme } from '@soundise/react-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
