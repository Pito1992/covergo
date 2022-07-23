import Select, { CommonPropsAndClassName, GroupBase } from 'react-select';
import Option, { OptionType } from './Option';
import DropdownIndicator from './DropdownIndicator';
import SingleValue from './SingleValue';
import MenuList from './MenuList';
import Control from './Control';

export interface ISelectProps extends Partial<CommonPropsAndClassName<OptionType, false, GroupBase<OptionType>>> {}

function SelectComp({
  className,
  options,
  ...restProps
}: ISelectProps): JSX.Element {
  return (
    <Select
      className={className}
      options={options}
      components={{
        DropdownIndicator, Option,
        SingleValue, MenuList,
        Control,
        IndicatorSeparator: null,
      }}
      {...restProps}
    />
  )
}


export default SelectComp
