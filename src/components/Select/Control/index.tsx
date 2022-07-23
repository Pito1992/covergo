import classNames from 'classnames';
import { components, ControlProps } from 'react-select';
import type { OptionType } from '../Option';
import styles from './styles.module.scss'

export interface IControlProps extends ControlProps<OptionType> {}

function ControlComp({
  children,
  className,
  ...restProps
}: IControlProps): JSX.Element {
  return (
    <components.Control className={classNames(styles.control, className)} {...restProps}>
      {children}
    </components.Control>
  )
}


export default ControlComp
