import React from 'react';
import classNames from 'classnames';
import { RANK } from '../../constants';

import styles from './styles.module.scss';

type ButtonProps = JSX.IntrinsicElements['button']
export interface IButtonProps extends ButtonProps {
  center?: boolean
  rank?: RANK
}

function ButtonComp({
  children,
  className,
  center,
  rank = RANK.DEFAULT,
  type = "button",
  ...restProps
}: IButtonProps): JSX.Element {
  return (
    <button className={classNames(styles.button, styles[rank], {
      [styles.center]: center,
    }, className)} type={type} {...restProps}>
      {children}
    </button>
  )
}

export default ButtonComp