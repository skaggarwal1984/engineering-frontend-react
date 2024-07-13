import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Star, People, TrendingUp, Code } from '@mui/icons-material';

// Define your color palette
const darkBlue = '#1976d2'; // Dark blue for text and accents
const white = '#ffffff'; // White for background and text
const textColor = '#333'; // Default text color

// Styled components
const Section = styled('div')({
  padding: '40px 20px',
  backgroundColor: white, // White background for the section
  marginTop: '20px',
});

const SummaryCard = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  textAlign: 'center',
  color: textColor,
  backgroundColor: white, // White background for summary card
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const MetricCard = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: white, // White background for metric cards
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  color: darkBlue, // Dark blue text color
  width: '200px', // Ensures a consistent card width
});

const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
});

const Summary = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Typography variant="h4" gutterBottom align="center" marginBottom={4} color={darkBlue}>
        My Approach to Leadership
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <MetricCard>
            <IconWrapper>
              <Star color="inherit" fontSize="large" />
            </IconWrapper>
            <Typography variant="h6">Vision</Typography>
            <Typography variant="body2">
              Set strategic direction of overall engineering platform & product to achieve long-term success.
            </Typography>
          </MetricCard>
        </Grid>
        <Grid item>
          <MetricCard>
            <IconWrapper>
              <People color="inherit" fontSize="large" />
            </IconWrapper>
            <Typography variant="h6">People</Typography>
            <Typography variant="body2">
              Empower teams through mentorship, collaboration, and a culture of growth. Make your team the best go-getter team.
            </Typography>
          </MetricCard>
        </Grid>
        <Grid item>
          <MetricCard>
            <IconWrapper>
              <TrendingUp color="inherit" fontSize="large" />
            </IconWrapper>
            <Typography variant="h6">Engineering</Typography>
            <Typography variant="body2">
              Set the highest standards when it comes to quality controls and engineering architecture.
            </Typography>
          </MetricCard>
        </Grid>
        <Grid item>
          <MetricCard>
            <IconWrapper>
              <Code color="inherit" fontSize="large" />
            </IconWrapper>
            <Typography variant="h6">Deliver Results</Typography>
            <Typography variant="body2">
              Ensuring all efforts lead to measurable, impactful outcomes for the business.
            </Typography>
          </MetricCard>
        </Grid>
      </Grid>
    </Section>
  );
});

export default Summary;
