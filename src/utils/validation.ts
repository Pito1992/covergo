
export function composeValidators<T = string>(...validators: Function[]) {
  return function (value: T) {
    return validators.reduce((error, validator) => error || validator(value), undefined);
  }
}

export function required<T = string>(value: T) {
  return (value ? undefined : 'Please input value');
}

export function requiredCharLength(minCharLength: number) {
  return function(value: string) {
    return (value.length >= minCharLength ? undefined : `Please input more than ${minCharLength} character(s)`);
  }
}

export function requiredStartingWithAlphabet(value: string) {
  return (/^[^0-9]/gm.test(value) ? undefined : 'Please input starting value only alphabet');
}
