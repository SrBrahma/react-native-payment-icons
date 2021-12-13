import * as React from 'react';
import Svg, { Ellipse, Path, SvgProps } from 'react-native-svg';

const SvgAlipay = (props: SvgProps) => (
  <Svg viewBox="0 0 780 500" {...props}>
    <Path
      d="M40 0h700c22 0 40 18 40 40v420c0 22-18 40-40 40H40c-22 0-40-18-40-40V40C0 18 18 0 40 0z"
      fill="#fff"
    />
    <Path
      d="M114 258c-5 1-13 2-18 7-14 12-6 34 24 34 16 0 33-10 46-27-19-9-34-16-52-14z"
      fill="#2BA6DF"
    />
    <Path
      d="m222 273 33 10v-96c0-16-13-29-30-29H99c-16 0-30 13-30 29v126c0 16 13 29 30 29h126c16 0 30-13 30-29v-1s-48-20-73-32c-16 20-37 32-59 32-37 0-50-32-32-53 4-5 10-9 20-11 16-4 41 2 65 10l10-25h-73v-8h37v-14h-45v-7h45v-19s0-3 3-3h18v22h45v7h-45v13h37c-4 15-9 28-16 39l30 10z"
      fill="#2BA6DF"
    />
    <Path
      d="m340 201 40 86h-21l-11-23h-32l-11 23h-14l40-83s2-3 4-3h5zm-21 55h26l-13-27-13 27zm88 32h-19v-82c0-2 1-4 4-4h15v86zm36-1h-19v-62c0-2 1-3 4-3h15v65zm23-64h13v6c2-2 5-4 8-4l10-2 11 2 8 7 6 10 1 11c0 5 0 10-2 14-2 5-4 9-7 12l-10 8-13 2h-7l-5-1v21h-19v-78c-1-8 2-8 6-8zm13 47 1 4 2 4 4 2 4 1 5-2 4-5 2-7 1-9v-11l-3-8-3-5-5-1h-4l-3 2c-1 1-1 2-3 2l-2 3v30zm81-47 12 1 8 4 5 5 2 7v48h-19v-5l-3 2-4 2-4 1-5 1-8-1-6-4-4-5-1-7 1-6 4-6 5-4 7-4 8-3 8-2 2-1v-12l-2-3-2-2-4-1s-10 0-19 8l-4-6c-2 1 9-7 23-7zm7 32-6 3-5 3-4 5-1 4 1 3 1 3c0 2 1 2 2 2l2 1 5-1 5-4v-19zm46 54h-12l-1-12s16 1 20-5c2-2 3-9 3-9l-31-60h21l20 39 17-39h14l-32 71c-1 2-6 15-19 15z"
      fill="#3F3A39"
    />
    <Ellipse cx={433} cy={204} rx={10} ry={9} fill="#2BA6DF" />
    <Path
      d="M684 173h-7v-1h14v1h-6v19h-2v-19h1zm10-1h3l4 11 2 4 2-4 4-11h2v20h-2v-18l-2 5-4 12h-1l-5-12-1-5v18h-2v-20z"
      fill="#3F3A39"
    />
  </Svg>
);

export default SvgAlipay;
