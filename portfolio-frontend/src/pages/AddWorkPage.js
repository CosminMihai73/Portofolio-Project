import React from 'react';
import WorkForm from '../components/WorkForm';
import { Container} from '@mui/material';

const AddWorkPage = () => {
  return (
    <Container>
      <WorkForm isEdit={false} />
    </Container>
  );
};

export default AddWorkPage;
