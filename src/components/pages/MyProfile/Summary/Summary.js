import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Star, People, TrendingUp, Code } from '@mui/icons-material';

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

const SummaryCard = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  textAlign: 'center',
  color: '#333333',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const MetricCard = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)', // Gradient background for a vibrant look
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
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
      <Grid container spacing={4}>
        {/* Summary Section */}
        <Grid item xs={12} md={8}>
          <SummaryCard>
            <Typography variant="h5" gutterBottom>
              Executive Summary
            </Typography>
            <Typography variant="body1" paragraph>
              With over a decade of experience in engineering leadership, I have honed my skills in building high-performing teams and driving innovative solutions. As an Engineering Director, my journey has been marked by leading complex projects, fostering a culture of continuous improvement, and delivering impactful technology solutions.
            </Typography>
            <Typography variant="body1" paragraph>
              My professional ethos centers around empowering teams to achieve their best, championing cutting-edge technologies, and navigating the challenges of rapidly evolving markets. I am deeply committed to developing and mentoring engineering talent, ensuring alignment with organizational goals, and delivering exceptional results.
            </Typography>
            <Typography variant="body1" paragraph>
              My technical expertise spans scalable systems architecture, software development, and process optimization. Outside of work, I am passionate about continuous learning and contributing to the tech community.
            </Typography>
          </SummaryCard>
        </Grid>

        {/* Key Metrics Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom align="center">
            Key Metrics
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MetricCard>
                <IconWrapper>
                  <Star color="inherit" fontSize="large" />
                </IconWrapper>
                <Typography variant="h6">Leadership</Typography>
                <Typography variant="body1">90% Proficiency</Typography>
              </MetricCard>
            </Grid>
            <Grid item xs={6}>
              <MetricCard>
                <IconWrapper>
                  <People color="inherit" fontSize="large" />
                </IconWrapper>
                <Typography variant="h6">Team Building</Typography>
                <Typography variant="body1">85% Expertise</Typography>
              </MetricCard>
            </Grid>
            <Grid item xs={6}>
              <MetricCard>
                <IconWrapper>
                  <TrendingUp color="inherit" fontSize="large" />
                </IconWrapper>
                <Typography variant="h6">Innovation</Typography>
                <Typography variant="body1">80% Skill</Typography>
              </MetricCard>
            </Grid>
            <Grid item xs={6}>
              <MetricCard>
                <IconWrapper>
                  <Code color="inherit" fontSize="large" />
                </IconWrapper>
                <Typography variant="h6">Technical Acumen</Typography>
                <Typography variant="body1">95% Mastery</Typography>
              </MetricCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
});

export default Summary;
