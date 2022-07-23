import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
interface IHeadingProps extends HeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  bold?: boolean;
  center?: boolean;
}

function HeadingComp({
  tag = 'h4',
  children,
  className,
  bold,
  center,
  ...restProps
}: IHeadingProps): JSX.Element {
  return React.createElement<HeadingProps>(tag, {
    className: classNames(styles.heading, styles[tag], {
      [styles.bold]: bold,
      [styles.center]: center,
    }, className),
    ...restProps,
  }, children)
}

export default HeadingComp