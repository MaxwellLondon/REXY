import React from 'react';
import { Svg, Circle } from 'react-native-svg';

const CircleSvg = ({ radius, color }) => {
  return (
    <Svg height={radius * 2} width={radius * 2}>
      <Circle
        cx={radius}
        cy={radius}
        r={radius}
        fill={color}
      />
    </Svg>
  );
};

export default CircleSvg;