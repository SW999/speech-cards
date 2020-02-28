import * as React from 'react';
import {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
  LegacyRef,
} from 'react';
import { ContentItem } from './ContentItem';
import { InputText } from '../InputText';

type MainStepProps = {
  changeStepContent: (
    content: string,
    step: number,
    itemNumber: number
  ) => void;
  changeStepName: (title: string, step: number) => void;
  content: string[];
  error: object;
  onAddContentItem: (step: number, itemNumber: number) => void;
  onRemoveContentItem: (step: number, itemNumber: number) => void;
  register: (val) => LegacyRef<HTMLInputElement>;
  required?: boolean;
  step: number;
  title: string;
};

export const MainStep: FunctionComponent<MainStepProps> = ({
  changeStepContent,
  changeStepName,
  content,
  error,
  onAddContentItem,
  onRemoveContentItem,
  register,
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
          error={error}
          register={register}
        />
      ))
    );
  }, [content, step, changeStepContent, onAddContentItem, onRemoveContentItem]);

  return (
    <>
      <InputText
        label="Title"
        name="stepTitle"
        onChange={handleChange}
        placeholder={`Enter step ${step} title`}
        value={title}
        error={error}
        register={register}
        required
      />
      {contentItems}
    </>
  );
};
