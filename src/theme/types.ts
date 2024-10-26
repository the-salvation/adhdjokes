import { AnimatableNumericValue } from 'react-native';

import { IIOSShadow } from '@styles';

export type ScaleFunction = (size: number) => number;
type SpacingParameter = number | 'auto';

export interface Theme {
  scale: ScaleFunction;
  verticalScale: ScaleFunction;
  moderateScale: ScaleFunction;
  moderateVerticalScale: ScaleFunction;

  shadowNone: IIOSShadow;
  shadowSmall: IIOSShadow;
  shadowMiddle: IIOSShadow;

  none: SpacingParameter;
  auto: SpacingParameter;
  miniscule: SpacingParameter;
  smallest: SpacingParameter;
  small: SpacingParameter;
  xsmall: SpacingParameter;
  medium: number | AnimatableNumericValue;
  large: SpacingParameter;
  xlarge: SpacingParameter;
  xxlarge: SpacingParameter;
  massive: SpacingParameter;

  white: string;
  lightGray: string;
  black: string;
  purple: string;
  purpleish: string;
  grey: string;
  lightGrey: string;
  darkerGrey: string;

  fontSmall: number;
  fontMedium: number;
  fontLarge: number;

  sizeSmall: number;
  sizeLarge: number;

  lineHeightSmall: number;
  lineHeightMedium: number;
  lineHeightLarge: number;
}
