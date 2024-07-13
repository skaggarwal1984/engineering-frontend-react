import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Work } from '@mui/icons-material';

// Define theme colors
const themeColors = {
  primary: '#1976d2', // Example primary color from the theme
  secondary: '#ffffff', // Background color for card items
  text: '#333333', // Text color for consistency
  shadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for consistency
};

// Styled components
const Section = styled('div')({
  padding: '30px 20px',
  backgroundColor: themeColors.secondary, // White background for the section
  position: 'relative',
});

const TimelineContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around', // Distribute items evenly
  position: 'relative',
  overflowX: 'auto', // Allows horizontal scrolling if necessary
  padding: '20px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    width: '100%',
    height: '2px',
    backgroundColor: '#e0e0e0',
    zIndex: 1,
  },
});

const TimelineItem = styled(Box)({
  width: '200px',
  padding: '15px',
  backgroundColor: themeColors.secondary, // White background for timeline items
  boxShadow: themeColors.shadow,
  borderRadius: '12px',
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
  '&:not(:last-child)': {
    marginRight: '20px', // Spacing between items
  },
});

const TimelineDate = styled(Typography)({
  fontWeight: 'bold',
  color: '#777777',
  marginBottom: '10px',
});

const RoleText = styled(Typography)({
  color: themeColors.primary, // Apply theme color for role text
  fontWeight: 'bold',
  fontSize: '1.1rem',
});

const DescriptionText = styled(Typography)({
  color: themeColors.text,
});

// Main component
const CareerTimeline = React.forwardRef((props, ref) => {
  const timelineData = [
    { date: '2021 - Present', role: 'Engineering Director at Lowe\'s India', description: 'Leading multiple product engineering global teams (50+) to deliver best in class personalization & recommendations' },
    { date: '2015 - 2020', role: 'Specialist Master at Deloitte US India', description: 'Architected & managed multiple large-scale engineering teams (30+) in delivering content platforms & enterprise assessments' },
    { date: '2014 - 2015', role: 'Team Lead at Allstate India', description: 'Led engineering teams in supporting property insurance web applications' },
    { date: '2007 - 2013', role: 'Team Lead at Accenture', description: 'Led engineering teams in supporting health insurance employer applications' },
    { date: '2006 - 2007', role: 'Trainee Software Engineer at SR Infotech', description: 'Contributed to the development of accouting modules' },
  ];

  return (
    <Section ref={ref}>
      <Typography variant="h4" gutterBottom align="center" color={themeColors.primary}>
        Career Timeline
      </Typography>
      <TimelineContainer container spacing={3}>
        {timelineData.map((item, index) => (
          <Grid item key={index}>
            <TimelineItem>
              <TimelineDate variant="body2">{item.date}</TimelineDate>
              <Box mt={2}>
                <RoleText variant="h6">{item.role}</RoleText>
                <DescriptionText variant="body1">
                  {item.description}
                </DescriptionText>
              </Box>
            </TimelineItem>
          </Grid>
        ))}
      </TimelineContainer>
    </Section>
  );
});

export default CareerTimeline;
