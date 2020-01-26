import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import { ContentItem } from './ContentItem';

type MainStepProps = {
  content: string[];
  changeStepName: (title: string, step: number) => void;
  changeStepContent: (
    content: string,
    step: number,
    itemNumber: number
  ) => void;
  step: number;
  title: string;
};

export const MainStep: FunctionComponent<MainStepProps> = ({
  content,
  changeStepName,
  changeStepContent,
  step,
  title,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    changeStepName(e.currentTarget.value, step);
  const getContentItems = () =>
    content.map((val, idx) => (
      <ContentItem
        key={`step-${step}-${idx}`}
        step={step}
        handleChangeContent={changeStepContent}
        itemCount={idx}
        itemText={val}
        onAdd={() => false}
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
          autoComplete="off"
          autoCorrect="off"
          placeholder={`Enter step ${step} title`}
          onChange={handleChange}
          spellCheck={false}
          value={title}
        />
      </div>
      {getContentItems()}
    </>
  );
};
