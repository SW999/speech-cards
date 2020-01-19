import * as React from 'react';
import { FormEvent, FunctionComponent, useState } from 'react';
import { ContentItem } from './ContentItem';

type MainStepProps = {
  content: string[];
  handleChange: (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ) => void;
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

  const handleChangeItem = (val: string, index: number) => {
    setContentArr(content => {
      content[index] = val;
      return [...content];
    });
  };

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
        />
      </div>
      {contentArr.map((val, idx) => (
        <ContentItem
          key={idx}
          handleChange={handleChangeItem}
          itemCount={idx}
          itemText={val}
          onAdd={onAddContentItem}
        />
      ))}
      {/*      <div className="form-group">*/}
      {/*        <label htmlFor="step-content">Content:</label>*/}
      {/*        <span id="step-content-hint" className="step-content-hint">*/}
      {/*          Markdown&nbsp;*/}
      {/*          <a*/}
      {/*            href="https://www.markdownguide.org/basic-syntax"*/}
      {/*            target="_blank"*/}
      {/*            tabIndex={-1}*/}
      {/*          >*/}
      {/*            syntax*/}
      {/*          </a>*/}
      {/*          &nbsp;is available.*/}
      {/*        </span>*/}
      {/*        <textarea*/}
      {/*          id="step-content"*/}
      {/*          name="content"*/}
      {/*          rows={5}*/}
      {/*          aria-describedby="step-content-hint"*/}
      {/*          autoCapitalize="none"*/}
      {/*          autoCorrect="off"*/}
      {/*          placeholder={`Use an asterisk before each item.*/}
      {/*New item should start from a new line:*/}
      {/** Some idea*/}
      {/** Next idea`}*/}
      {/*          onChange={handleChange}*/}
      {/*          spellCheck={false}*/}
      {/*          value={content}*/}
      {/*        />*/}
      {/*      </div>*/}
    </>
  );
};
