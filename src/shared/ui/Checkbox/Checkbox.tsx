import { FC, InputHTMLAttributes } from 'react';
import clsx from 'classnames';
import styles from './Checkbox.module.css';
import { useId } from 'react';



interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, error, disabled, ...rest }) => {
  const autoId = useId();
  const id = rest.id || autoId;

  return (
    <label htmlFor={id} className={clsx(styles.wrapper, { [styles.disabled]: disabled })}>
      <input
        id={id}
        type="checkbox"
        className={styles.input}
        disabled={disabled}
        {...rest}
      />
      <span className={clsx(styles.box, {
            [styles.boxError]: !!error
        })}></span>
      <span className={clsx(styles.label, {
            [styles.labelDisabled]: disabled,
            [styles.labelError]: !!error
        })}>{label}</span>
      {error && <div className={styles.errorMsg}>{error}</div>}
    </label>
  );
};
