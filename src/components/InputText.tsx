import * as React from 'react';
import { ChangeEvent, FunctionComponent, LegacyRef, ReactNode } from 'react';

type InputTextProps = {
  controls?: ReactNode;
  describedby?: string;
  description?: ReactNode;
  error: object;
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  register: (val) => LegacyRef<HTMLInputElement>;
  required?: boolean;
  value: string;
};

export const InputText: FunctionComponent<InputTextProps> = ({
  controls,
  describedby,
  description,
  error,
  label,
  name,
  onChange,
  placeholder,
  register,
  required,
  value,
}) => (
  <>
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      {description}
      {error[name] && <div className="error-message">Required field</div>}
      <input
        ref={register({ required })}
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
        className={error[name] ? 'invalid-input' : null}
      />
      {controls}
    </div>
  </>
);
