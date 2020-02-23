import * as React from 'react';
import { ChangeEvent, FunctionComponent, ReactNode } from 'react';

type InputTextProps = {
  controls?: ReactNode;
  describedby?: string;
  description?: ReactNode;
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export const InputText: FunctionComponent<InputTextProps> = ({
  controls,
  describedby,
  description,
  label,
  name,
  onChange,
  placeholder,
  value,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}:</label>
    {description}
    <input
      id={name}
      name={name}
      type="text"
      aria-describedby={describedby}
      autoCapitalize="none"
      autoCorrect="off"
      autoComplete="off"
      placeholder={placeholder}
      onChange={onChange}
      spellCheck={false}
      value={value}
      autoFocus
    />
    {controls}
  </div>
);
