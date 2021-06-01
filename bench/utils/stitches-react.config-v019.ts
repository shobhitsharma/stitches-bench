import { createCss } from '@stitches/react-v019';
import { config, darkThemeConfig } from './stitches-default-config';

export const { css, styled, theme, getCssString, global, keyframes } = createCss(config);

export const darkTheme = theme('dark-theme', darkThemeConfig);
