import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const IssueForm = () => {
  const [issueName, setIssueName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [location, setLocation] = useState('');
  const [waterOrSanitation, setWaterOrSanitation] = useState('');
  const [status, setStatus] = useState('');
  const [remark, setRemark] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    // Submit the form data (issueName, issueDescription, location, waterOrSanitation, status, remark) to your backend or perform any other action
    console.log('Form submitted:', { issueName, issueDescription, location, waterOrSanitation, status, remark });
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
          disabled
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
          disabled
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          disabled
        />
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel sx={{ color: 'black' }}>Water or Sanitation</InputLabel>
          <Select
            value={waterOrSanitation}
            onChange={(e) => setWaterOrSanitation(e.target.value)}
            label="Water or Sanitation"
            sx={{ color: 'white' }}
            disabled
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
            <MenuItem value="open">Completed</MenuItem>
            <MenuItem value="inProgress">In Progress</MenuItem>
            <MenuItem value="closed">Pending</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Remark"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Enter remark"
          InputLabelProps={{ sx: { color: 'white' } }}
          InputProps={{ sx: { color: 'white' } }}
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        />



        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default IssueForm;
