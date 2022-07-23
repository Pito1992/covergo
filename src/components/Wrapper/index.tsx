import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type DivProps = JSX.IntrinsicElements['div']
interface IWrapperProps extends DivProps {}

function WrapperComp({ className, children, ...restProps }: IWrapperProps): JSX.Element {
  return (
    <div className={classNames(styles.wrapper,
      className
    )} {...restProps}>
      {children}
    </div>
  );
}

export default WrapperComp;
