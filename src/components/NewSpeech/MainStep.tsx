import * as React from 'react';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { ContentItem } from './ContentItem';

type MainStepProps = {
  content: string[];
  changeStepContent: (
    content: string,
    step: number,
    itemNumber: number
  ) => void;
  changeStepName: (title: string, step: number) => void;
  onAddContentItem: (step: number, itemNumber: number) => void;
  onRemoveContentItem: (step: number, itemNumber: number) => void;
  step: number;
  title: string;
};

export const MainStep: FunctionComponent<MainStepProps> = ({
  content,
  changeStepContent,
  changeStepName,
  onAddContentItem,
  onRemoveContentItem,
  step,
  title,
}) => {
  const [contentItems, setContentItems] = useState([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    changeStepName(e.currentTarget.value, step);

  useEffect(() => {
    setContentItems(() =>
      content.map((val, idx) => (
        <ContentItem
          key={`step-${step}-${idx}`}
          handleChangeContent={changeStepContent}
          isLastItem={idx === content.length - 1}
          itemCount={idx}
          itemText={val}
          onAdd={onAddContentItem}
          onRemove={onRemoveContentItem}
          step={step}
        />
      ))
    );
  }, [content, step, changeStepContent, onAddContentItem, onRemoveContentItem]);

  return (
    <>
      <div className="form-group">
        <label htmlFor="step-title">Title:</label>
        <input
          id="step-title"
          name="title"
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          placeholder={`Enter step ${step} title`}
          onChange={handleChange}
          spellCheck={false}
          value={title}
        />
      </div>
      {contentItems}
    </>
  );
};
