import classNames from 'classnames';

import styles from './styles.module.scss';

type InputProps = JSX.IntrinsicElements['input']
export interface IRadioProps extends InputProps {}

function RadioComp({
  className,
  children,
  ...restProps
}: IRadioProps): JSX.Element {
  return (
    <label
      className={classNames(styles.checkbox, className)}
      aria-hidden="true"
    >
      <input type="radio" {...restProps} />
      <div className={styles.checkboxIcon} />
      <span className={styles.text}>{children}</span>
    </label>
  );
}

export default RadioComp;
