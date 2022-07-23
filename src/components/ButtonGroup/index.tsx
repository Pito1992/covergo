import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type DivProps = JSX.IntrinsicElements['div']
interface IButtonGroupProps extends DivProps {}

function ButtonGroupComp({ className, children, ...restProps }: IButtonGroupProps): JSX.Element {
  return (
    <div className={classNames(styles.container, className)} {...restProps}>
      {React.Children.map(children as JSX.Element[], (child: JSX.Element): JSX.Element => (
          React.cloneElement(child, {
            className: classNames(child.props.className, styles.button)
          })
      ))}
    </div>
  );
}

export default ButtonGroupComp;
