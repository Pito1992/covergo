import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type ParagraphProps = JSX.IntrinsicElements['p'];
interface IParagraphProps extends ParagraphProps {}

function ParagraphComp({
  children,
  className,
  ...restProps
}: IParagraphProps): JSX.Element {
  return (
    <p className={classNames(styles.paragraph, className)} {...restProps}>
      {children}
    </p>
  )
}

export default ParagraphComp