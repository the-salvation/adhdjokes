import { FC } from 'react';
import { COLORS } from '@styles'; import Svg, { Path } from 'react-native-svg';

type IconProps = {
  focused?: boolean;
  width?: number;
  height?: number;
};

export const HistoryIcon: FC<IconProps> = ({ focused, width = 35, height = 35 }) => (
  <Svg width={width} height={height} viewBox="0 0 28 28">
    <Path
      d="M14 9V14H18M25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14Z"
      stroke={focused ? COLORS.purple : COLORS.grey}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);
