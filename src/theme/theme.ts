import { Platform } from 'react-native';

import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

import { COLORS, FONT_SIZES, lineHeights, shadowSizes, sizes, spacing } from '@styles';

import { Theme } from './types';

export const theme: Theme = {
  // Functions from react-native-size-matters
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,

  // Platform specific shadows
  shadowNone: {
    ...Platform.select({
      ...shadowSizes.none,
    }),
  },
  shadowSmall: {
    ...Platform.select({
      ...shadowSizes.small,
    }),
  },
  shadowMiddle: {
    ...Platform.select({
      ...shadowSizes.middle,
    }),
  },

  // Scaled spacing sizes
  none: spacing.None,
  auto: spacing.Auto,
  miniscule: scale(spacing.Miniscule),
  smallest: scale(spacing.Smallest),
  small: scale(spacing.Small),
  xsmall: scale(spacing.XSmall),
  medium: scale(spacing.Medium),
  large: scale(spacing.Large),
  xlarge: scale(spacing.XLarge),
  xxlarge: scale(spacing.XXLarge),
  massive: scale(spacing.Massive),

  // Colors
  white: COLORS.white,
  lightGray: COLORS.lightGray,
  black: COLORS.black,
  purple: COLORS.purple,
  purpleish: COLORS.purpleish,
  grey: COLORS.grey,
  lightGrey: COLORS.lightGrey,
  darkerGrey: COLORS.darkerGrey,

  // Font sizes
  fontSmall: scale(FONT_SIZES.Small),
  fontMedium: scale(FONT_SIZES.Medium),
  fontLarge: scale(FONT_SIZES.Large),

  // Sizes
  sizeSmall: sizes.small,
  sizeLarge: sizes.large,

  // Line heights
  lineHeightSmall: lineHeights.small,
  lineHeightMedium: lineHeights.medium,
  lineHeightLarge: lineHeights.large,
};
