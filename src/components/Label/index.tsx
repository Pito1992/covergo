import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type LabelProps = JSX.IntrinsicElements['label'];
interface ILabelProps extends LabelProps {}

function LabelComp({
  children,
  className,
  ...restProps
}: ILabelProps): JSX.Element {
  return (
    <label className={classNames(styles.label, className)} {...restProps}>
      {children}
    </label>
  )
}


export default LabelComp