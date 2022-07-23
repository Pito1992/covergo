import { useId } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { OptionType } from '../../Select/Option';

import Label from '../../Label';
import Select from '../../Select';
import FieldBoundary from '../../FieldBoundary';

type FormSelectProps<T> = Omit<FieldRenderProps<T>, 'checked'> & {
  label?: string;
  selectClassName?: string;
}

function FormSelectComp<T = OptionType>({
  input, meta, label, className, selectClassName, ...props
}: FormSelectProps<T>): JSX.Element {
  const id = useId();

  return (
    <FieldBoundary
      className={className}
    >
      {label && <Label htmlFor={id}>{label}</Label>}
      <Select
        {...input}
        {...props}
        className={selectClassName}
      />
    </FieldBoundary>
  )
}

export default FormSelectComp