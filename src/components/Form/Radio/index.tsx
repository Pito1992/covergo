import { useId } from 'react';
import { FieldRenderProps } from 'react-final-form';

import Radio from '../../Radio';
import FieldBoundary from '../../FieldBoundary';

type FormRadioProps<T> = Omit<FieldRenderProps<T>, 'multiple'> & {
  label?: string;
  inputClassName?: string;
}

function FormRadioComp<T = string>({
  input, label, className, inputClassName, ...props
}: FormRadioProps<T>): JSX.Element {
  const id = useId();

  return (
    <FieldBoundary
      className={className}
    >
      <Radio
        {...input}
        {...props}
        id={id}
        className={inputClassName}
      >
        {label}
      </Radio>
    </FieldBoundary>
  )
}

export default FormRadioComp