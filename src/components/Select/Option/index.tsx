import classNames from 'classnames';
import { components, OptionProps } from 'react-select';

import styles from './styles.module.scss'

export type OptionType = JSX.IntrinsicElements['option'] & {
  label: string;
  value: string;
};
export interface IOptionProps extends OptionProps<OptionType> {}

function OptionComp({
  children,
  className,
  isSelected,
  ...restProps
}: IOptionProps): JSX.Element {
  return (
    <components.Option
      className={classNames(
        styles.option,
        {
          [styles.isSelected]: isSelected,
        },
        className
      )}
      isSelected={isSelected}
      {...restProps}
    >
      {children}
    </components.Option>
  )
}


export default OptionComp
