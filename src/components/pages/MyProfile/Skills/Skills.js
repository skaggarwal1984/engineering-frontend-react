import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import LeadershipIcon from '@mui/icons-material/Group';
import ProjectManagementIcon from '@mui/icons-material/Assignment';
import SoftwareArchitectureIcon from '@mui/icons-material/Architecture';
import DevOpsIcon from '@mui/icons-material/Build';
import CloudComputingIcon from '@mui/icons-material/Cloud';
import AgileMethodologiesIcon from '@mui/icons-material/Autorenew';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DataUsageIcon from '@mui/icons-material/DataUsage'; // For Data Engineering
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; // For API Management
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt'; // For GraphQL
import SpringIcon from '@mui/icons-material/Code'; // For Spring Framework

const darkBlue = '#1976d2'; // Dark blue for text and accents

// Expanded sample data for Skills
const skills = [
  { name: 'Leadership', icon: <LeadershipIcon />, description: 'Expertise in leading high-performing teams and delivering impactful projects.' },
  { name: 'Project Management', icon: <ProjectManagementIcon />, description: 'Proven track record in managing complex projects and driving them to successful completion.' },
  { name: 'Software Architecture', icon: <SoftwareArchitectureIcon />, description: 'Expert in all types of software architecture, designing and implementing scalable, robust solutions.' },
  { name: 'Software Engineering', icon: <SpringIcon />, description: 'Lifetime experience with Spring Framework, Spring Boot, React JS, including designing and implementing scalable applications from inception.' },
  { name: 'Database Management', icon: <StorageIcon />, description: 'Managing and optimizing relational and NoSQL database systems.' },
  { name: 'Data Engineering', icon: <DataUsageIcon />, description: 'Designing and implementing data pipelines and ETL processes.' },
  { name: 'DevOps', icon: <DevOpsIcon />, description: 'Integrating development and operations for efficient workflows and continuous delivery.' },
  { name: 'Cloud Computing', icon: <CloudComputingIcon />, description: 'Implementing and managing cloud-based solutions and architectures.' },
  { name: 'Agile Methodologies', icon: <AgileMethodologiesIcon />, description: 'Driving agile transformations and methodologies to enhance project delivery.' },
  { name: 'Node.js', icon: <CodeIcon />, description: 'Server-side development with Node.js for scalable backend solutions.' },
  { name: 'API Management', icon: <IntegrationInstructionsIcon />, description: 'Managing and optimizing APIs, including design, quality, and performance.' },
  { name: 'GraphQL', icon: <ViewQuiltIcon />, description: 'Developing and managing GraphQL APIs for efficient data fetching.' },
  { name: 'Coding Best Practices', icon: <CodeIcon />, description: 'Expert in best coding practices, quality assurance, and design controls to deliver high-quality software.' },
];

// Define card style
const SkillCard = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '15px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  marginBottom: '16px',
  backgroundColor: '#ffffff', // Matching the background color
});

const SkillIcon = styled(Box)({
  fontSize: '32px',
  marginRight: '16px',
  color: '#1976d2', // Matching the theme color
});

const SkillLabel = styled(Typography)({
  fontWeight: 'bold',
  color: '#1976d2', // Matching the theme color
  fontSize: '16px',
});

const SkillDescription = styled(Typography)({
  fontSize: '14px',
  color: '#555',
});

const Skills = React.forwardRef((props, ref) => {
  return (
    <Box sx={{ padding: '10px 20px', color: '#333333', borderRadius: '12px', maxWidth: '1200px', margin: '0 auto' }} ref={ref} id="skills">
      <Typography variant="h4" gutterBottom align="center" marginBottom={4} color={darkBlue}>
        Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SkillCard>
              <SkillIcon>{skill.icon}</SkillIcon>
              <Box>
                <SkillLabel variant="h6">{skill.name}</SkillLabel>
                <SkillDescription>{skill.description}</SkillDescription>
              </Box>
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default Skills;
