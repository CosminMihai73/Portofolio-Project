import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkItem = ({ work, onDelete }) => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Link to={`/works/${work.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="140"
          image={`http://localhost:3001${work.imageUrl}`}
          alt={work.title}
        />
      </Link>
      <CardContent>
        <Typography variant="h5" component="div">
          {work.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {work.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <a href={work.clientUrl} target="_blank" rel="noopener noreferrer">Client Site</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {work.status ? 'Visible' : 'Hidden'}
        </Typography>
        <div style={{ marginTop: 16 }}>
          <Link to={`/edit/${work.id}`}>
            <Button variant="contained" color="primary" style={{ marginRight: 8 }}>
              Edit
            </Button>
          </Link>
          <IconButton onClick={() => onDelete(work.id)} color="error">
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkItem;
