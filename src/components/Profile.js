import React from 'react';
import { Container, Typography, Grid, Paper, Avatar, styled } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

// Enhanced StyledPaper with opacity and modern styling
const StyledPaper = styled(Paper)({
  padding: '20px',
  marginTop: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with 80% opacity
  backdropFilter: 'blur(5px)', // Apply a blur effect to the background
  borderRadius: '15px', // Rounded corners for a modern look
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
});

const StyledAvatar = styled(Avatar)({
  width: '100px',
  height: '100px',
  backgroundColor: 'blue', // Customize this color if needed
});

const ProfilePage = () => {
  return (
    <Container maxWidth="md">
      <StyledPaper elevation={3}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <StyledAvatar>
              <PersonIcon />
            </StyledAvatar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              John Doe
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center" color="textSecondary">
              john.doe@example.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Role: Gate Keeper
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default ProfilePage;
