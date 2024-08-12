import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <Container maxWidth="lg" style={{ padding: '2rem 0' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" paragraph>
          Hello, I'm Iulia. I am a passionate artist with a deep love for creating stunning visuals. My work encompasses a variety of styles and mediums, reflecting my diverse interests and creative vision.
        </Typography>
        <Typography variant="h6" paragraph>
          My portfolio includes a range of projects that showcase my skills in design, photography, and illustration. Each piece represents a unique project that has allowed me to explore different techniques and concepts.
        </Typography>
      </Container>
    </div>
  );
};

export default HomePage;
