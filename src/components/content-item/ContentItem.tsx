import React, { ChangeEvent, FunctionComponent, LegacyRef } from 'react';
import { debounce } from 'utils/';
import Input from '../input/Input';
import md from '../../img/md.svg';

type AddRemoveContentItemProps = {
  error: object;
  handleChangeContent: (
    content: string,
    step: number,
    itemNumber: number
  ) => void;
  isLastItem: boolean;
  itemCount: number;
  itemText: string;
  onAdd: (step: number, itemNumber: number) => void;
  onRemove: (step: number, itemNumber: number) => void;
  register: (val) => LegacyRef<HTMLInputElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: any;
  step: number;
};

const ContentItem: FunctionComponent<AddRemoveContentItemProps> = ({
  error,
  handleChangeContent,
  isLastItem,
  itemCount,
  itemText,
  onAdd,
  onRemove,
  register,
  setValue,
  step,
}) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    handleChangeContent(e.currentTarget.value, step, itemCount);
    setValue(`contentItem-${step}-${itemCount}`, e.currentTarget.value);
  };

  const onAddContentItem = debounce((): void => {
    onAdd(step, itemCount);
  }, 500);

  const onRemoveContentItem = debounce((): void => {
    onRemove(step, itemCount);
  }, 500);

  return (
    <Input
      controls={
        <>
          {isLastItem && (
            <button
              className="btn btn-green-outlined btn-bold btn-rounded"
              onClick={onAddContentItem}
              title={itemText.trim() ? 'Add new idea' : 'Add text first'}
              type="button"
              disabled={!itemText.trim()}
            >
              +
            </button>
          )}
          {itemCount > 0 && (
            <button
              className="btn btn-orange-outlined btn-bold btn-rounded"
              onClick={onRemoveContentItem}
              title="Remove item"
              type="button"
            >
              −
            </button>
          )}
        </>
      }
      defaultValue={itemText}
      describedby={itemCount < 1 ? 'step-content-hint' : null}
      description={
        itemCount < 1 && (
          <span id="step-content-hint" className="step-content-hint">
            Markdown&nbsp;
            <a
              href="https://www.markdownguide.org/basic-syntax"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
            >
              syntax
            </a>
            &nbsp;is available <img src={md} alt="md" width="26" height="16" />
          </span>
        )
      }
      error={error}
      label="Idea"
      name={`contentItem-${step}-${itemCount}`}
      onChange={onInputChange}
      placeholder="Enter an idea"
      register={register}
      required={itemCount < 1}
    />
  );
};

export default ContentItem;
