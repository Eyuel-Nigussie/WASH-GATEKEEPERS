import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const IssueForm = () => {
  const [issueName, setIssueName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [location, setLocation] = useState('');
  const [waterOrSanitation, setWaterOrSanitation] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    // Submit the form data (issueName, issueDescription, location, waterOrSanitation, status) to your backend or perform any other action
    console.log('Form submitted:', { issueName, issueDescription, location, waterOrSanitation, status });
    // You can add further logic here such as displaying a success message

    // Navigate back to the home page
    navigate('/');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', backgroundColor: '#222', padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>Create New Issue</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Issue Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={issueName}
          onChange={(e) => setIssueName(e.target.value)}
          InputProps={{ sx: { color: 'white' } }}
          InputLabelProps={{ sx: { color: 'white' } }}
        />
        <TextField
          label="Issue Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          InputProps={{ sx: { color: 'white' } }}
          InputLabelProps={{ sx: { color: 'white' } }}
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          InputProps={{ sx: { color: 'white' } }}
          InputLabelProps={{ sx: { color: 'white' } }}
        />
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel sx={{ color: 'white' }}>Water or Sanitation</InputLabel>
          <Select
            value={waterOrSanitation}
            onChange={(e) => setWaterOrSanitation(e.target.value)}
            label="Water or Sanitation"
            sx={{ color: 'white' }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="water">Water</MenuItem>
            <MenuItem value="sanitation">Sanitation</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel sx={{ color: 'white' }}>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
            sx={{ color: 'white' }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="open">Open</MenuItem>
            <MenuItem value="inProgress">In Progress</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default IssueForm;
