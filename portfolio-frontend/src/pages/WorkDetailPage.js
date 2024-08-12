import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const WorkDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [work, setWork] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/works/${id}`);
        setWork(response.data);
      } catch (error) {
        console.error('Error fetching work details:', error);
      }
    };

    fetchWork();
  }, [id]);

  if (!work) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="md">
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            {work.title}
          </Typography>
          <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <img
            src={`http://localhost:3001${work.imageUrl}`}
            alt={work.title}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain', 
              maxHeight: '80vh', 
              display: 'block',   
              margin: '0 auto'    
            }}
          />
        </div>
          <Typography variant="body1" color="text.secondary" paragraph>
            {work.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <a href={work.clientUrl} target="_blank" rel="noopener noreferrer">Visit Client Site</a>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {work.status ? 'Visible' : 'Hidden'}
          </Typography>
          <Button onClick={() => navigate('/portofolio')} variant="contained" color="primary" style={{ marginTop: 16 }}>
            Back to Portfolio
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default WorkDetailPage;
