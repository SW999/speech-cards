import React, { FunctionComponent } from 'react';
import MasterForm from '../../master-form/MasterForm';
import { IState } from '../../../types';

type LocationType = {
  pathname: string;
  search: string;
  hash: string;
  state?: null | { data: IState };
};

type CreateNewType = {
  location: LocationType;
};

const CreateNew: FunctionComponent<CreateNewType> = ({ location }) => {
  const data = location.state?.data;

  return (
    <>
      <h1>{data ? 'Edit speech' : 'Create new'}</h1>
      <MasterForm data={data} />
    </>
  );
};

export default CreateNew;
