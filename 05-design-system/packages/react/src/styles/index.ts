import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } from "@ignite-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const { styled, css, getCssText, theme, createTheme, config, globalCss, keyframes } = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
  },
});
