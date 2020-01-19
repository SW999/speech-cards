import * as React from 'react';
import { FormEvent, FunctionComponent } from 'react';

type AddRemoveContentItemProps = {
  handleChange: (val: string, index: number) => void;
  itemCount: number;
  itemText: string;
  onAdd: () => void;
};

export const ContentItem: FunctionComponent<AddRemoveContentItemProps> = ({
  handleChange,
  itemCount,
  itemText,
  onAdd,
}) => {
  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    handleChange(e.currentTarget.value, itemCount);
  };

  return (
    <div className="form-group">
      <label htmlFor={`content-item-#{itemCount}`}>Content item:</label>
      {itemCount < 1 && (
        <span id="step-content-hint" className="step-content-hint">
          Markdown&nbsp;
          <a
            href="https://www.markdownguide.org/basic-syntax"
            target="_blank"
            tabIndex={-1}
          >
            syntax
          </a>
          &nbsp;is available.
        </span>
      )}
      <input
        id={`content-item-#{itemCount}`}
        name={`item-#{itemCount}`}
        type="text"
        autoCapitalize="none"
        autoCorrect="off"
        placeholder="Enter item text"
        aria-describedby={itemCount < 1 ? 'step-content-hint' : null} // FIXME
        onChange={onInputChange}
        spellCheck={false}
        value={itemText}
      />
      <button
        className="btn btn-green-outlined btn-bold btn-rounded"
        type="button"
        onClick={onAdd}
      >
        +
      </button>
      <button
        className="btn btn-orange-outlined btn-bold btn-rounded"
        type="button"
      >
        -
      </button>
    </div>
  );
};
