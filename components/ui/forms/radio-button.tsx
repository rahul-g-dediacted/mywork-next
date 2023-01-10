import type { ChangeEvent } from "react";
import styles from "./radio-button.module.css";

export interface RadioButtonProps {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly value: string;
  readonly checked?: boolean;
  onChange(evt: { checked: boolean; value: string }): void;
}

export default function RadioButton(props: RadioButtonProps) {
  const { id, name, label, value, checked, onChange } = props;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange({
      checked: e.target.checked,
      value: e.target.value,
    });
  }

  return (
    <div className={styles.container}>
      <input
        {...{ id, name, value, checked }}
        type="radio"
        className={styles.input}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
