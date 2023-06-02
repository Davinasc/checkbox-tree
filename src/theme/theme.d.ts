import 'styled-components';

import theme from './theme';
import { query, media } from './custom-media';

type ThemeTokens = Partial<typeof theme>;
type MediaTokens = typeof media & { query: typeof query };

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTokens {
    media?: MediaTokens;
  }
}
