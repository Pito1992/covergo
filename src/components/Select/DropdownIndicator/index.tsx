import { components, DropdownIndicatorProps } from 'react-select';
import type { OptionType } from '../Option';
import { ReactComponent as IconCaretDown } from '../../../assets/icons/caret-down.svg';

import styles from './styles.module.scss'

interface IDropdownIndicatorProps extends DropdownIndicatorProps<OptionType> {}

const DropdownIndicatorComp = (
  props: IDropdownIndicatorProps
) => {
  return (
    <components.DropdownIndicator {...props}>
      <IconCaretDown className={styles.icon} />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicatorComp
