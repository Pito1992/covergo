import classNames from 'classnames';
import { components, SingleValueProps } from 'react-select';
import type { OptionType } from '../Option';
import styles from './styles.module.scss'

export interface ISingleValueProps extends SingleValueProps<OptionType> {}

function SingleValueComp({
  children,
  className,
  ...restProps
}: ISingleValueProps): JSX.Element {
  return (
    <components.SingleValue className={classNames(styles.singleValue, className)} {...restProps}>
      {children}
    </components.SingleValue>
  )
}


export default SingleValueComp
