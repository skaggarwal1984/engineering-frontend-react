import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../../../../Header/Header';
import LeadershipIcon from '@mui/icons-material/Group';
import TechnicalIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// Define your color palette
const white = '#ffffff'; // White for background
const darkBlue = '#003f6c'; // Deep blue for text and accents
const lightGray = '#f4f4f4'; // Light gray for subtle backgrounds
const textColor = '#333'; // Default text color
const chartColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Colors for charts

// Styled components
const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100vh', // Full viewport height
  padding: '0',
  margin: '0',
  boxSizing: 'border-box',
  backgroundColor: white,
});

const ContentArea = styled('div')({
  flex: 1,
  padding: '40px',
  boxSizing: 'border-box',
  overflowY: 'auto',
});

const Sidebar = styled('div')({
  width: '300px',
  flexShrink: 0,
  padding: '40px',
  boxSizing: 'border-box',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: lightGray, // Added background color for sidebar
});

const HeroSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: white,
  padding: '40px',
  marginBottom: '40px',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Enhanced shadow for a more polished look
  width: '100%',
  boxSizing: 'border-box',
  position: 'relative',
});

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const ProjectTitle = styled(Typography)({
  fontWeight: '700',
  fontSize: '2.5rem',
  color: darkBlue,
  marginBottom: '20px',
  lineHeight: '1.4',
  maxWidth: '100%',
});

const ProjectDescription = styled(Typography)({
  fontSize: '1.125rem',
  color: textColor,
  maxWidth: '100%',
  lineHeight: '1.7',
});

const HighlightCard = styled('div')({
  padding: '20px',
  borderRadius: '12px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced hover effect
  },
  width: '100%',
  backgroundColor: white,
  boxSizing: 'border-box',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const HighlightTitle = styled(Typography)({
  fontWeight: '600',
  fontSize: '1.25rem',
  color: darkBlue,
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const HighlightContent = styled(Typography)({
  fontSize: '0.875rem',
  color: textColor,
  marginTop: '10px',
  lineHeight: '1.6',
});

const SectionTitle = styled(Typography)({
  fontWeight: '600',
  fontSize: '1.5rem',
  color: darkBlue,
  margin: '20px 0',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

const AwardsSection = styled('div')({
  padding: '20px',
  backgroundColor: white,
  borderRadius: '12px',
  width: '100%',
  boxSizing: 'border-box',
});

const AwardCard = styled('div')({
  padding: '15px',
  borderRadius: '12px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '10px 0',
  width: '100%',
  backgroundColor: white,
  boxSizing: 'border-box',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const AwardTitle = styled(Typography)({
  fontWeight: '600',
  fontSize: '1.125rem',
  color: darkBlue,
  marginBottom: '10px',
});

const AwardDescription = styled(Typography)({
  fontSize: '0.875rem',
  color: textColor,
  lineHeight: '1.6',
});

// Sample data for charts
const data = [
  { name: 'Leadership', value: 40 },
  { name: 'Technical Skills', value: 35 },
  { name: 'People Skills', value: 25 },
];

const ProjectDetail = React.forwardRef((props, ref) => {
  return (
    <>
      <Header />
      <PageContainer>
        <ContentArea>
          <HeroSection>
            {/* <HeroImage src={heroImage} alt="Hero Image" /> */}
            <ProjectTitle>
              API Assessment & Technology Roadmap for Trans America Life Insurance Company
            </ProjectTitle>
            <ProjectDescription>
              As a Specialist Master at Deloitte, I led a crucial API assessment for Trans America Life Insurance Company. This 12-week project was a testament to my technical, people, and leadership skills, with my work being highly praised by the TA leadership in India.
            </ProjectDescription>
          </HeroSection>
    
          <SectionTitle>Project Highlights</SectionTitle>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <HighlightCard>
                <HighlightTitle>
                  <LeadershipIcon color="primary" style={{ marginRight: '10px' }} />
                  Leadership
                </HighlightTitle>
                <HighlightContent>
                  <ul>
                    <li>Conducted in-depth interviews with directors and architects.</li>
                    <li>Developed a forward-looking technology roadmap.</li>
                    <li>Showcased exceptional technical and leadership skills.</li>
                  </ul>
                </HighlightContent>
              </HighlightCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <HighlightCard>
                <HighlightTitle>
                  <TechnicalIcon color="primary" style={{ marginRight: '10px' }} />
                  Technical Acumen
                </HighlightTitle>
                <HighlightContent>
                  <ul>
                    <li>Assessed API management maturity and cloud-native strategy.</li>
                    <li>Reviewed API quality, design patterns, and tools.</li>
                    <li>Streamlined CI/CD processes for efficiency.</li>
                  </ul>
                </HighlightContent>
              </HighlightCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <HighlightCard>
                <HighlightTitle>
                  <PeopleIcon color="primary" style={{ marginRight: '10px' }} />
                  People Skills
                </HighlightTitle>
                <HighlightContent>
                  <ul>
                    <li>Earned high praise from TA leadership in India.</li>
                    <li>Enhanced team collaboration and morale.</li>
                    <li>Demonstrated exceptional people skills throughout the project.</li>
                  </ul>
                </HighlightContent>
              </HighlightCard>
            </Grid>
          </Grid>

          <SectionTitle>Project Impact</SectionTitle>
          <Box style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <PieChart width={600} height={300}>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Box>

          <SectionTitle>Awards & Recognition</SectionTitle>
          <AwardsSection>
            <AwardCard>
              <AwardTitle>Outstanding Achievement</AwardTitle>
              <AwardDescription>
                Recognized for exceptional leadership and technical skills during the API assessment project.
              </AwardDescription>
            </AwardCard>
            <AwardCard>
              <AwardTitle>Innovative Solution Award</AwardTitle>
              <AwardDescription>
                Awarded for presenting a cutting-edge technology roadmap and effective API management strategies.
              </AwardDescription>
            </AwardCard>
          </AwardsSection>
        </ContentArea>
        <Sidebar>
          {/* Add sidebar content if needed */}
        </Sidebar>
      </PageContainer>
    </>
  );
});

export default ProjectDetail;
