import React from 'react';
import { SvgProps } from 'react-native-svg';
import * as Components from './components/index';


// Alphabetically ordered
const PaymentTypeToComponent = {
  alipay: Components.Alipay,
  amex: Components.Amex,
  /** Alias to american-express */
  'american-express': Components.Amex,
  /** CVV representation */
  code: Components.Code,
  cvv: Components.Code,
  'diners-club': Components.Diners,
  /** Alias to diners-club */
  diners: Components.Diners,
  discover: Components.Discover,
  elo: Components.Elo,
  generic: Components.Generic,
  hiper: Components.Hiper,
  hipercard: Components.Hipercard,
  jcb: Components.Jcb,
  maestro: Components.Maestro,
  mastercard: Components.Mastercard,
  /** Alias to mastercard */
  master: Components.Mastercard,
  mir: Components.Mir,
  paypal: Components.Paypal,
  unionpay: Components.Unionpay,
  visa: Components.Visa,
};

const defaultType = 'generic';

const aspectRatio = 780 / 500; // Width / Height of the svgs.

const defaultWidth = 40;

type PaymentIconProps = {
  /** If invalid, it will default to generic. */
  type: keyof typeof PaymentTypeToComponent;
} & SvgProps;

export function PaymentIcon(props: PaymentIconProps): JSX.Element {
  const Component: (props: SvgProps) => JSX.Element = PaymentTypeToComponent[props.type] ?? PaymentTypeToComponent[defaultType];

  const width = (props.width === undefined && props.height === undefined) ? defaultWidth : props.width;

  return (
    <Component
      fill='#000' // We set this because rn-svg won't set black as the default color for some reason. Elo and Maestro cards wouldn't be bg black filled as in desktop.
      {...props}
      style={[{ aspectRatio }, props.style]} // After ...props to overwrite
      width={width}
    />
  );
}