import React, { FunctionComponent } from 'react';
import MasterForm from '../../components/master-form/MasterForm';
import { LocationType } from '../../types';

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
