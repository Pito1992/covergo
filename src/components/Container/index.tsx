import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type DivProps = JSX.IntrinsicElements['div']
interface IContainerProps extends DivProps {
  center?: boolean
}

function WrapperComp({ center, className, children, ...restProps }: IContainerProps): JSX.Element {
  return (
    <div className={classNames(styles.container,
      {
        [styles.center]: center,
      },
      className
    )} {...restProps}>
      {children}
    </div>
  );
}

export default WrapperComp;
