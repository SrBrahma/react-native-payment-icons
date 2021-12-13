import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgDiners = (props: SvgProps) => (
  <Svg viewBox="0 0 780 500" {...props}>
    <Path
      d="M40 0h700c22 0 40 18 40 40v420c0 22-18 40-40 40H40c-22 0-40-18-40-40V40C0 18 18 0 40 0z"
      fill="#0079BE"
    />
    <Path
      d="M600 251.4c0-99.4-83-168-174-168h-78.2c-92 0-167.7 68.7-167.7 168 0 91 75.7 165.7 167.7 165.2H426c91 .5 174-74.2 174-165.2z"
      fill="#fff"
    />
    <Path
      d="M348.3 97.4c-84 0-152.2 68.3-152.2 152.6s68.1 152.5 152.2 152.6c84 0 152.2-68.3 152.2-152.6S432.4 97.5 348.3 97.4z"
      fill="#0079BE"
    />
    <Path
      d="M252 249.6a96.9 96.9 0 0 1 62-90.3v180.5a96.8 96.8 0 0 1-62-90.2zm131 90.3V159.3a96.8 96.8 0 0 1 0 180.6z"
      fill="#fff"
    />
  </Svg>
);

export default SvgDiners;
