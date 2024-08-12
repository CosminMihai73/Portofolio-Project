import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkItem from './WorkItem';
import { Container, Grid, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const WorkList = () => {
  const [works, setWorks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/works');
        setWorks(response.data);
      } catch (error) {
        console.error('Error fetching works:', error);
      }
    };

    fetchWorks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/works/${id}`);
      setWorks(works.filter(work => work.id !== id));
    } catch (error) {
      console.error('Error deleting work:', error);
    }
  };

  const filteredWorks = works.filter(work => {
    if (filter === 'all') return true;
    return filter === 'visible' ? work.status === true : work.status === false;
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>

      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Filter by Status</InputLabel>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label="Filter by Status"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="visible">Visible</MenuItem>
          <MenuItem value="hidden">Hidden</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        {filteredWorks.map((work) => (
          <Grid item xs={12} sm={6} md={4} key={work.id}>
            <WorkItem work={work} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WorkList;
