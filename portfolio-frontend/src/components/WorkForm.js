import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

const WorkForm = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [clientUrl, setClientUrl] = useState('');
  const [existingImageUrl, setExistingImageUrl] = useState('');
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (isEdit && id) {
      const fetchWork = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/works/${id}`);
          const { title, description, clientUrl, imageUrl, status } = response.data;
          setTitle(title);
          setDescription(description);
          setClientUrl(clientUrl);
          setExistingImageUrl(imageUrl);
          setStatus(status);
        } catch (error) {
          console.error('Error fetching work:', error);
        }
      };
      fetchWork();
    }
  }, [isEdit, id]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('clientUrl', clientUrl);
    formData.append('status', status);

    try {
      let filePath = existingImageUrl;

      if (file) {
        const fileResponse = await axios.post('http://localhost:3001/works/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        filePath = fileResponse.data.filePath;
      }

      if (isEdit) {
        await axios.put(`http://localhost:3001/works/${id}`, {
          title,
          description,
          imageUrl: filePath,
          clientUrl,
          status,
        });
      } else {
        await axios.post('http://localhost:3001/works', {
          title,
          description,
          imageUrl: filePath,
          clientUrl,
          status,
        });
      }

      navigate('/');
    } catch (error) {
      console.error('Error saving work:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isEdit ? 'Edit Work' : 'Add New Work'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Client URL"
          value={clientUrl}
          onChange={(e) => setClientUrl(e.target.value)}
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value === 'true')}
            label="Status"
          >
            <MenuItem value={true}>Visible</MenuItem>
            <MenuItem value={false}>Hidden</MenuItem>
          </Select>
        </FormControl>

        {/* Custom file input */}
        <label htmlFor="file-upload">
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <Button
            variant="contained"
            color="primary"
            component="span"
            startIcon={<PhotoCamera />}
            style={{ marginTop: 16 }}
          >
            Upload Image
          </Button>
        </label>

        {existingImageUrl && (
          <img
            src={`http://localhost:3001${existingImageUrl}`}
            alt="Current work"
            style={{ marginTop: 16, maxWidth: '100%', borderRadius: 8 }}
          />
        )}
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
          {isEdit ? 'Update' : 'Submit'}
        </Button>
      </form>
    </Container>
  );
};

export default WorkForm;
