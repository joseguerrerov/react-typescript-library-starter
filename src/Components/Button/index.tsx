import * as React from 'react';
import { BaseButton } from '../BaseStyledComponents';

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export const Button: React.FC<IButtonProps> = React.memo<IButtonProps>((props) => (
  <BaseButton {...props}>
    {props.children}
  </BaseButton>
));
