import classNames from 'classnames';
import { components, MenuListProps } from 'react-select';
import type { OptionType } from '../Option';
import styles from './styles.module.scss'

export interface IMenuListProps extends MenuListProps<OptionType> {}

function MenuListComp({
  children,
  className,
  ...restProps
}: IMenuListProps): JSX.Element {
  return (
    <components.MenuList className={classNames(styles.menuList, className)} {...restProps}>
      {children}
    </components.MenuList>
  )
}


export default MenuListComp
