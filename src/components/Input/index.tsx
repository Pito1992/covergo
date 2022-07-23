import classNames from 'classnames';

import styles from './styles.module.scss'

type InputProps = JSX.IntrinsicElements['input']
export interface IInputProps extends InputProps {
  hasError?: boolean;
}

function InputComp({
  className,
  hasError,
  ...restProps
}: IInputProps): JSX.Element {
  return (
    <input
      className={classNames(
        styles.input,
        { 
          [styles.hasError]: hasError
        },
        className
      )}
      {...restProps}
    />
  )
}


export default InputComp
