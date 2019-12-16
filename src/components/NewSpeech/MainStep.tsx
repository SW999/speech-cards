import * as React from 'react';
import { FormEvent, FunctionComponent } from 'react';

type MainStepProps = {
  content: string;
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
  return (
    <div className="form-group">
      <label htmlFor="step-title">{`Step ${step} title`}:</label>
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
      <label htmlFor="step-content">{`Step ${step} content`}:</label>
      <span id="step-content-hint" className="step-content-hint">
        Markdown{' '}
        <a href="https://www.markdownguide.org/basic-syntax" target="_blank">
          syntax
        </a>{' '}
        is available.
      </span>
      <textarea
        id="step-content"
        name="content"
        rows={5}
        aria-describedby="step-content-hint"
        autoCapitalize="none"
        autoCorrect="off"
        placeholder={`Please use an asterisk before each item. New item should start from a new line:
* Some idea
* Next idea
* And so on`}
        onChange={handleChange}
        spellCheck={false}
        value={content}
      />
    </div>
  );
};
