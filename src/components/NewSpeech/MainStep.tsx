import * as React from 'react';
import { FormEvent, FunctionComponent, useState, useEffect } from 'react';
import { ContentItem } from './ContentItem';
import { HandleChange } from './MasterForm';

export type HandleChangeItem = {
  val: string;
  index: number;
};

type MainStepProps = {
  content: string[];
  handleChange: (HandleChange) => void;
  step: number;
  title: string;
};

export const MainStep: FunctionComponent<MainStepProps> = ({
  content,
  handleChange,
  step,
  title,
}) => {
  const [contentArr, setContentArr] = useState<string[]>(content);
  const onAddContentItem = () => {
    setContentArr(contentArr => [...contentArr, '']);
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

  const changeName = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    handleChange({ name, value });
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

  useEffect(() => {
    handleChange({ name: 'content', value: [...contentArr] }); //FIXME
  }, [contentArr]);

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
          onChange={changeName}
          spellCheck={false}
          value={title}
        />
      </div>
      {getContentItems()}
    </>
  );
};
