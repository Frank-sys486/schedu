import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function ImageComponent(props: any) {
  return (
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M10 42H38C40.2091 42 42 40.2091 42 38V10C42 7.79086 40.2091 6 38 6H10C7.79086 6 6 7.79086 6 10V38C6 40.2091 7.79086 42 10 42ZM10 42L32 20L42 30M20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17Z"
        stroke="#B3B3B3"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
