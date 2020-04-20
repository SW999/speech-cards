import * as React from 'react';
import {
  ChangeEvent,
  FunctionComponent,
  LegacyRef,
  useEffect,
  useState,
} from 'react';
import { ContentItem } from '../content-item/ContentItem';
import { Input } from '../input/Input';

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
  setValue: any;
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
  setValue,
  title,
}) => {
  const [contentItems, setContentItems] = useState([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeStepName(e.currentTarget.value, step);
    setValue(`step${step}Title`, e.currentTarget.value);
  };

  useEffect(() => {
    setContentItems(() =>
      content.map((val, idx) => (
        <ContentItem
          error={error}
          handleChangeContent={changeStepContent}
          isLastItem={idx === content.length - 1}
          itemCount={idx}
          itemText={val}
          key={`step-${step}-${idx}`}
          onAdd={onAddContentItem}
          onRemove={onRemoveContentItem}
          register={register}
          setValue={setValue}
          step={step}
        />
      ))
    );
  }, [content, step, changeStepContent, onAddContentItem, onRemoveContentItem]);

  return (
    <>
      <Input
        key={`step${step}Title`}
        autoFocus
        defaultValue={title}
        error={error}
        label="Title"
        name={`step${step}Title`}
        onChange={handleChange}
        placeholder={`Enter step ${step} title`}
        register={register}
        required
      />
      {contentItems}
    </>
  );
};
