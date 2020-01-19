import * as React from 'react';
import { FormEvent, FunctionComponent } from 'react';

type AddRemoveContentItemProps = {
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  itemCount: number;
  itemText: string;
};

export const AddRemoveContentItem: FunctionComponent<AddRemoveContentItemProps> = ({
  handleChange,
  itemCount,
  itemText,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={`content-item-#{itemCount}`}>Content item:</label>
      <input
        id={`content-item-#{itemCount}`}
        name={`item-#{itemCount}`}
        type="text"
        autoCapitalize="none"
        autoCorrect="off"
        placeholder="Enter item text"
        onChange={handleChange}
        spellCheck={false}
        value={itemText}
      />
    </div>
  );
};
