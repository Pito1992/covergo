import { useId } from 'react';
import { FieldRenderProps } from 'react-final-form';

import Label from '../../Label';
import Input from '../../Input';
import FieldBoundary from '../../FieldBoundary';

type FormInputProps<T> = Omit<FieldRenderProps<T>, 'checked' | 'multiple'> & {
  label?: string;
  inputClassName?: string;
}

function FormInputComp<T = number>({
  input, meta, label, className, inputClassName, ...props
}: FormInputProps<T>): JSX.Element {
  const id = useId();
  const { error, touched } = meta;
  const hasError = touched && error;

  return (
    <FieldBoundary<T>
      hasError={hasError}
      error={error}
      className={className}
    >
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        {...input}
        {...props}
        id={id}
        hasError={hasError}
        className={inputClassName}
      />
    </FieldBoundary>
  )
}

export default FormInputComp