import classNames from 'classnames';
import { FieldMetaState } from 'react-final-form';
import styles from './styles.module.scss'

type FieldBoundaryProps<T> = JSX.IntrinsicElements['div'] & FieldMetaState<T>
export interface IFieldBoundaryProps<T> extends FieldBoundaryProps<T> {
  hasError?: boolean;
}

function FieldBoundaryComp<T>({
  className, children, error, hasError, ...restProps
}: IFieldBoundaryProps<T>): JSX.Element {
  return (
    <div
      className={
        classNames(styles.container,
        {
          [styles.error]: hasError
        },
        className)}
      {...restProps}
    >
      {children}
      {hasError && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default FieldBoundaryComp