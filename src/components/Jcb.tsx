import * as React from 'react';
import Svg, { LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

const SvgJcb = (props: SvgProps) => (
  <Svg viewBox="0 0 780 500" {...props}>
    <Path
      d="M40 0h700c22 0 40 18 40 40v420c0 22-18 40-40 40H40c-22 0-40-18-40-40V40C0 18 18 0 40 0z"
      fill="#0E4C96"
    />
    <Path
      d="M632 361c0 42-33 76-75 76H148V139c0-42 33-76 75-76h409v298z"
      fill="#fff"
    />
    <LinearGradient
      id="jcb_svg__a"
      x1={84}
      x2={85}
      y1={646}
      y2={646}
      gradientTransform="matrix(132.87 0 0 -323.02 -10686 208760)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#007B40" offset={0} />
      <Stop stopColor="#55B330" offset={1} />
    </LinearGradient>
    <Path
      d="M499 257h35c12 2 15 20 4 26-7 4-16 1-23 2h-16v-28zm42-33c2 10-7 18-15 17h-27v-27l32 1c5 1 9 5 10 9zm64-136v272c0 27-24 51-51 51l-81 1V302h88c14-1 29-10 29-25 2-15-12-26-26-28-5 0-5-1 0-2 13-2 23-16 19-29-3-14-18-20-31-20h-79v-61c2-27 27-49 53-49h79z"
      fill="url(#jcb_svg__a)"
    />
    <LinearGradient
      id="jcb_svg__b"
      x1={84}
      x2={85}
      y1={646}
      y2={646}
      gradientTransform="matrix(133.43 0 0 -323.02 -11031 208760)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#1D2970" offset={0} />
      <Stop stopColor="#006DBA" offset={1} />
    </LinearGradient>
    <Path
      d="M175 140c0-28 25-51 52-51l80-1v273c-1 27-25 50-51 50l-81 1V298c26 6 53 9 80 5 16-3 34-11 39-27 4-14 2-29 2-44v-34h-46v67c-2 14-15 23-28 22-16 1-48-11-48-11l1-136z"
      fill="url(#jcb_svg__b)"
    />
    <LinearGradient
      id="jcb_svg__c"
      x1={84}
      x2={85}
      y1={646}
      y2={646}
      gradientTransform="matrix(132.96 0 0 -323.03 -10842 208770)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#6E2B2F" offset={0} />
      <Stop stopColor="#E30138" offset={1} />
    </LinearGradient>
    <Path
      d="M325 212c-3 0-1-8-1-12v-63c2-27 27-49 54-49h78v273c-1 27-25 50-51 50l-81 1V287c18 15 43 18 66 18 17 0 35-3 51-7v-23c-19 10-41 16-62 10-14-3-25-18-25-33-2-15 8-32 23-37 19-6 40-1 58 7 4 2 8 4 6-2v-18c-30-7-62-10-92-2-9 2-17 6-24 12z"
      fill="url(#jcb_svg__c)"
    />
  </Svg>
);

export default SvgJcb;
