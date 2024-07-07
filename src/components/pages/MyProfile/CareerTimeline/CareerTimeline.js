import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Work } from '@mui/icons-material';

// Styled components
const Section = styled('div')({
  padding: '10px 20px', // Adjusted padding
  marginTop: '0', // Removed any margin at the top
  color: '#333333',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxWidth: '1200px', // Added max-width for centering
  margin: '0 auto', // Center content
});

const TimelineCard = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const TimelineDate = styled(Typography)({
  fontWeight: 'bold',
  color: '#555555',
  marginBottom: '5px',
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(500deg, #f6d365 0%, #fda085 0%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  fontWeight: 'bold',
});

const IconWrapper = styled(Box)({
  background: '#ffffff',
  borderRadius: '50%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  position: 'absolute',
  left: '-25px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const CareerTimeline = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Career Timeline
          </Typography>
          <TimelineCard>
            <IconWrapper>
              <Work color="primary" />
            </IconWrapper>
            <TimelineDate variant="body2">2024 - Present</TimelineDate>
            <Box mt={2}>
              <GradientText variant="h6">Engineering Director at Lowe's Companies, Inc.</GradientText>
              <Typography variant="body1">
                Leading engineering teams to deliver scalable software solutions and drive technological innovation.
              </Typography>
            </Box>
          </TimelineCard>
          <TimelineCard>
            <IconWrapper>
              <Work color="primary" />
            </IconWrapper>
            <TimelineDate variant="body2">2018 - 2024</TimelineDate>
            <Box mt={2}>
              <GradientText variant="h6">Senior Engineering Manager at XYZ Corp</GradientText>
              <Typography variant="body1">
                Managed large-scale projects and mentored engineering teams to achieve operational excellence.
              </Typography>
            </Box>
          </TimelineCard>
          <TimelineCard>
            <IconWrapper>
              <Work color="primary" />
            </IconWrapper>
            <TimelineDate variant="body2">2013 - 2018</TimelineDate>
            <Box mt={2}>
              <GradientText variant="h6">Software Engineer at ABC Inc.</GradientText>
              <Typography variant="body1">
                Contributed to the development of key software products and led initiatives to enhance system performance.
              </Typography>
            </Box>
          </TimelineCard>
          {/* Add more timeline cards as needed */}
        </Grid>
      </Grid>
    </Section>
  );
});

export default CareerTimeline;
