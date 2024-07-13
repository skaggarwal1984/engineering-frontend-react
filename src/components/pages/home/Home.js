import React from 'react';
import { Typography, Container, Grid, Button, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Define your color palette
const darkBlue = '#1976d2'; // Dark blue for text and accents
const white = '#ffffff'; // White for text on dark backgrounds
const textColor = '#333'; // Default text color
const gray = '#e0e0e0'; // Gray color for disabled state

// Styled components
const MainContent = styled('section')({
  padding: '50px 20px',
  marginTop: '80px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: white,
  color: textColor,
  boxSizing: 'border-box',
});

const ProblemSection = styled('div')(({ disabled }) => ({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: disabled ? gray : white,
  color: disabled ? '#a0a0a0' : darkBlue,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  margin: '10px 0',
  boxSizing: 'border-box',
  opacity: disabled ? 0.6 : 1,
  width: '100%',
  height: '250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: darkBlue,
    color: white,
    transform: 'scale(1.05)',
  },
}));

const ProblemTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '10px',
  color: darkBlue,
});

const ProblemDescription = styled(Typography)({
  marginBottom: '15px',
  color: darkBlue,
});

const ActionButton = styled(Button)({
  backgroundColor: darkBlue,
  color: white,
  '&:hover': {
    backgroundColor: '#115293',
  },
  marginTop: '10px',
});

const MainContentSection = () => (
  <MainContent>
    <Typography variant="h3" gutterBottom style={{ color: darkBlue }}>
      Welcome to Your Engineering & Leadership Hub
    </Typography>
    <Typography variant="h6" paragraph style={{ color: textColor }}>
      Learn, share, and lead the change in engineering and leadership.
    </Typography>
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <ProblemSection>
            <Typography variant="h5" gutterBottom>
              Learn
            </Typography>
            <Typography variant="body1" paragraph>
              Explore insightful articles to enhance your knowledge and stay updated with the latest trends in engineering and leadership.
            </Typography>
            <ActionButton href="/articles" variant="contained">
              Explore Articles
            </ActionButton>
          </ProblemSection>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProblemSection disabled>
            <Typography variant="h5" gutterBottom>
              Share
            </Typography>
            <Typography variant="body1" paragraph>
              Engage with our community by sharing your thoughts and feedback on articles. Your insights can help others learn and grow.
            </Typography>
            <Tooltip title="Coming Soon" arrow>
              <span>
                <ActionButton variant="contained" disabled>
                  Comment & Share
                </ActionButton>
              </span>
            </Tooltip>
          </ProblemSection>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProblemSection>
            <Typography variant="h5" gutterBottom>
              Lead
            </Typography>
            <Typography variant="body1" paragraph>
              Contribute to the field of engineering and leadership by sharing your experiences. Your experience can inspire and guide others.
            </Typography>
            <ActionButton href="mailto:skaggarwal1984@gmail.com" variant="contained">
              Get in Touch
            </ActionButton>
          </ProblemSection>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProblemSection>
            <Typography variant="h5" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              Learn more about my journey, experiences, and approach to leadership.
            </Typography>
            <ActionButton component={Link} to="/profile" variant="contained">
              View Profile
            </ActionButton>
          </ProblemSection>
        </Grid>
      </Grid>
    </Container>
  </MainContent>
);

export default MainContentSection;
