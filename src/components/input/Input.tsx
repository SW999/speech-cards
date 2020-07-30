import React, {
  ChangeEvent,
  FunctionComponent,
  LegacyRef,
  ReactNode,
} from 'react';

type InputTextProps = {
  autoFocus?: boolean;
  controls?: ReactNode;
  defaultValue?: string;
  describedby?: string;
  description?: ReactNode;
  error: object;
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  register: (val) => LegacyRef<HTMLInputElement>;
  required?: boolean;
};

const Input: FunctionComponent<InputTextProps> = ({
  autoFocus,
  controls,
  defaultValue,
  describedby,
  description,
  error,
  label,
  name,
  onChange,
  placeholder,
  register,
  required,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}:</label>
    {description}
    {error[name] && error[name]?.type === 'required' && (
      <div className="error-message" role="alert">
        Required field
      </div>
    )}
    <input
      aria-describedby={describedby}
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect="off"
      autoFocus={autoFocus}
      className={error[name] ? 'invalid-input' : null}
      defaultValue={defaultValue}
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      ref={register({ required })}
      spellCheck={false}
      required={required}
      type="text"
    />
    {controls}
  </div>
);

export default Input;
