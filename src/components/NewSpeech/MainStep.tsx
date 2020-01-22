import * as React from 'react';
import { FormEvent, FunctionComponent, useState } from 'react';
import { ContentItem } from './ContentItem';

export type HandleChangeItem = {
  val: string;
  index: number;
};

type MainStepProps = {
  content: string[];
  changeStepName: (title: string, step: number) => void;
  step: number;
  title: string;
};

export const MainStep: FunctionComponent<MainStepProps> = ({
  content,
  changeStepName,
  step,
  title,
}) => {
  const [contentArr, setContentArr] = useState<string[]>(content);
  const onAddContentItem = () => {
    setContentArr(contentArr => [...contentArr, '']);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    changeStepName(e.currentTarget.value, step);
  };

  const handleChangeItem = ({ val, index }: HandleChangeItem) => {
    setContentArr(contentArr => {
      if (contentArr.length - 1 < index) {
        return [...contentArr, val];
      }
      const arr = contentArr.map((v, i) => (i === index ? val : v));
      return [...arr];
    });
  };

  const getContentItems = () =>
    content.map((val, idx) => (
      <ContentItem
        key={`step-${step}-${idx}`}
        step={step}
        handleChange={handleChangeItem}
        itemCount={idx}
        itemText={val}
        onAdd={onAddContentItem}
      />
    ));

  return (
    <>
      <div className="form-group">
        <label htmlFor="step-title">Title:</label>
        <input
          id="step-title"
          name="title"
          type="text"
          autoCapitalize="none"
          autoCorrect="off"
          placeholder={`Enter step ${step} title`}
          onChange={handleChange}
          spellCheck={false}
          value={title}
          autoFocus
        />
      </div>
      {/*{getContentItems()}*/}
    </>
  );
};
