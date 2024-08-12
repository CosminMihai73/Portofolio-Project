import React, { useState } from 'react';
import WorkList from '../components/WorkList';
import { Container} from '@mui/material';


const Creations = () => {
  const [filter] = useState('all');

  return (
    <Container>
      <WorkList filter={filter} />
    </Container>
  );
};

export default Creations;
