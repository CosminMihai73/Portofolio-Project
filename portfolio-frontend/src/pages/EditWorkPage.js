import React from 'react';
import WorkForm from '../components/WorkForm';
import { Container } from '@mui/material';

const EditWorkPage = () => {
  return (
    <Container>
      <WorkForm isEdit={true} />
    </Container>
  );
};

export default EditWorkPage;
