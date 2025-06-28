import { lightThemeBorder } from './light-theme/border';
import { lightThemeColor } from './light-theme/colors';
import { lightThemeShadow } from './light-theme/shadow';
import { lightThemeSpace } from './light-theme/space';
import { lightThemeTypography } from './light-theme/typography';
import { border } from './primitive-tokens/border';
import { color } from './primitive-tokens/colors';
import { shadow } from './primitive-tokens/shadow';
import { space } from './primitive-tokens/space';
import { font } from './primitive-tokens/typography';

export const lightTheme = {
  border: {
    ...lightThemeBorder,
    ...border,
  },
  colors: { ...lightThemeColor, ...color },
  shadow: {
    ...lightThemeShadow,
    ...shadow,
  },
  space: {
    ...lightThemeSpace,
    ...space,
  },
  typography: { ...lightThemeTypography, ...font },
};
