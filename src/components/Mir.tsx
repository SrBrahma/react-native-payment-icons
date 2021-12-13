import * as React from 'react';
import Svg, { G, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

const SvgMir = (props: SvgProps) => (
  <Svg
    viewBox="0 0 780 500"
    {...props}
  >
    <Path
      d="M40 0h700c22 0 40 18 40 40v420c0 22-18 40-40 40H40c-22 0-40-18-40-40V40C0 18 18 0 40 0z"
      fill='#fff'

    />
    <G>
      <Path
        d="M544 241v108h60v-64h68c29-1 53-19 62-44H544z"
        fill='#37a72e'

      />
      <LinearGradient
        id="mir_svg__a"
        gradientUnits="userSpaceOnUse"
        x1={362}
        y1={275}
        x2={363}
        y2={275}
        gradientTransform="matrix(201.7633 0 0 -79 -72584 21950)"
      >
        <Stop
          offset={0}
          stopColor='#00a0e5'
        />
        <Stop
          offset={1}
          stopColor='#0077c3'

        />
      </LinearGradient>
      <Path
        d="M536 152c4 44 45 79 96 79h105l1-13c0-37-30-66-66-66H536z"
        fill='url(#mir_svg__a)'

      />
      <Path
        d="m447 229 4-1c2 0 3 1 3 3v117h60V152h-60c-7 0-16 5-19 12l-48 103v1a4 4 0 0 1-8-2V152h-60v196h60c8-1 16-6 19-13l49-105v-1zM223 233l-35 115h-43l-35-115c0-2-2-4-4-4-2 1-4 2-4 4v114H42V151h67c11 0 23 9 26 19l29 96c2 5 4 5 5 0l30-95c3-11 14-20 25-20h67v196h-60V233c0-2-2-4-4-4l-4 4z"
        fill='#37a72e'

      />
    </G>
  </Svg>
);

export default SvgMir;
