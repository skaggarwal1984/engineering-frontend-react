import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Typography, Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../../Header/Header';
import MyProfile from '../MyProfile/MyProfile';
import Articles from '../MyProfile/Articles/Articles';

// Define your color palette
const gradientBackground = 'linear-gradient(500deg, #f6d365 0%, #fda085 100%)'; // Light gradient background
const darkBlue = '#1976d2'; // Dark blue for text and accents
const lightBlue = '#e3f2fd'; // Light blue background
const white = '#ffffff'; // White for text on dark backgrounds
const textColor = '#333'; // Default text color

const MainContent = styled('section')({
  padding: '30px 20px',
  marginTop: '100px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: white,
  color: textColor,
  boxSizing: 'border-box', // Ensure padding and borders are included in element's total width and height
});

const ProblemSection = styled('div')({
  padding: '20px',
  textAlign: 'center',
  backgroundImage: gradientBackground, // Gradient background for a vibrant look
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  margin: '10px 0', // Reduced margin to ensure boxes fit within the viewport
  boxSizing: 'border-box', // Ensure padding and borders are included in element's total width and height
});

const ProblemTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '10px',
  color: darkBlue, // Darker blue for the title
});

const ProblemDescription = styled(Typography)({
  marginBottom: '15px',
  color: darkBlue, // Darker blue for descriptions
});

const MainContentSection = () => (
  <MainContent>
    <Typography variant="h4" gutterBottom>
      Welcome to Your Engineering & Leadership Hub
    </Typography>
    <Typography variant="h6" paragraph>
      Learn, share and lead the change
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <ProblemSection>
          <ProblemTitle variant="h6" gutterBottom>
            <strong>Evolving Your Leadership Style?</strong>
          </ProblemTitle>
          <ProblemDescription paragraph>
            Learn leadership techniques to inspire and drive performance in your engineering teams.
          </ProblemDescription>
        </ProblemSection>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProblemSection>
          <ProblemTitle variant="h6" gutterBottom>
            <strong>Ensuring High Engineering Quality?</strong>
          </ProblemTitle>
          <ProblemDescription paragraph>
            Implement quality control measures and best practices to maintain high standards across your projects.
          </ProblemDescription>
        </ProblemSection>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProblemSection>
          <ProblemTitle variant="h6" gutterBottom>
            <strong>Designing Robust Engineering Architectures?</strong>
          </ProblemTitle>
          <ProblemDescription paragraph>
            Explore best practices for creating scalable and maintainable engineering architectures that support business growth.
          </ProblemDescription>
        </ProblemSection>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProblemSection>
          <ProblemTitle variant="h6" gutterBottom>
            <strong>Want to be a Great Successful Engineer?</strong>
          </ProblemTitle>
          <ProblemDescription paragraph>
            Discover how to transition from a good engineer to a great engineer.
          </ProblemDescription>
        </ProblemSection>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProblemSection>
          <ProblemTitle variant="h6" gutterBottom>
            <strong>Struggling with Scaling Engineering Teams?</strong>
          </ProblemTitle>
          <ProblemDescription paragraph>
            Uncover proven strategies to scale your engineering teams effectively while maintaining productivity and culture.
          </ProblemDescription>
        </ProblemSection>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProblemSection>
          <ProblemTitle variant="h6" gutterBottom>
            <strong>Managing Remote Engineering Teams?</strong>
          </ProblemTitle>
          <ProblemDescription paragraph>
            Discover how to effectively manage and lead remote teams for maximum productivity.
          </ProblemDescription>
        </ProblemSection>
      </Grid>
    </Grid>
  </MainContent>
);

const MainComponent = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainContentSection />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/articles" element={<Articles />} />
      {/* Add more routes as needed */}
    </Routes>
  </>
);

export default MainComponent;
