import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgHiper = (props: SvgProps) => (
  <Svg
    viewBox="0 0 780 500"
    {...props}
  >
    <Path
      d="M724 0H56C25 0 1 25 1 55v390c0 30 24 55 55 55h668c31 0 55-25 55-55V55c0-30-24-55-55-55z"
      fill='#f37421'
    />
    <Path
      d="M100 140v175h40v-73h65v73h39V140h-39v67h-65v-67h-40zm486 124 2-16c0-31-16-63-57-63-44 0-64 36-64 68 0 40 24 65 68 65 17 0 33-3 46-8l-6-27c-10 3-21 5-35 5-18 0-34-8-36-24h82zm-82-27c1-11 8-26 25-26 18 0 22 16 22 26h-47zm96 78h40v-73c3-13 13-20 27-20l11 1v-37l-8-1c-12 0-28 8-35 26h-1l-1-23h-34l1 42v85z"
      fill='#fff'
    />
    <Path
      d="M285 133a20 20 0 1 1-1 41 20 20 0 0 1 1-41z"
      fillRule='evenodd'
      clipRule='evenodd'
      fill='#ffe700'
    />
    <Path
      d="M368 285h20c20 0 29-12 29-26 0-13-1-43-26-43-28 0-24 37-23 57v12zm-104-97h41v71c0 14 7 26 24 26 0-32 0-65-2-97h34l2 18c16-32 67-25 84 2 17 28 23 108-59 108h-20l1 49h-41v-49c-44 0-64-28-64-57v-71z"
      fillRule='evenodd'
      clipRule='evenodd'
      fill='#fff'
    />
  </Svg>
);

export default SvgHiper;
