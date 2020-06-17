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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
  }, [
    content,
    step,
    changeStepContent,
    onAddContentItem,
    onRemoveContentItem,
    error,
    register,
    setValue,
  ]);

  return (
    <>
      <Input
        key={`step${step}Title`}
        autoFocus
        value={title}
        error={error}
        label="Topic title"
        name={`step${step}Title`}
        onChange={handleChange}
        placeholder={`Enter topic title of step ${step}`}
        register={register}
        required
      />
      {contentItems}
    </>
  );
};
