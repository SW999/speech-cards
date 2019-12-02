import * as React from 'react';
import { FunctionComponent } from 'react';
import { MasterForm } from './NewSpeech/MasterForm';

export const CreateNew: FunctionComponent = () => {
  return (
    <>
      <h2>Create new speech</h2>
      <MasterForm />
    </>
  );
};
