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

// Sample data for Skills
const skills = [
  { name: 'Leadership', icon: <LeadershipIcon />, description: 'Expertise in leading high-performing teams.' },
  { name: 'Project Management', icon: <ProjectManagementIcon />, description: 'Proven track record in managing successful projects.' },
  { name: 'Software Architecture', icon: <SoftwareArchitectureIcon />, description: 'Designing scalable and robust software solutions.' },
  { name: 'DevOps', icon: <DevOpsIcon />, description: 'Integrating development and operations for efficient workflows.' },
  { name: 'Cloud Computing', icon: <CloudComputingIcon />, description: 'Implementing cloud-based solutions and architectures.' },
  { name: 'Agile Methodologies', icon: <AgileMethodologiesIcon />, description: 'Driving agile transformations and methodologies.' },
  { name: 'JavaScript/TypeScript', icon: <CodeIcon />, description: 'Developing dynamic and responsive web applications.' },
  { name: 'React', icon: <CodeIcon />, description: 'Building modern user interfaces with React.' },
  { name: 'Node.js', icon: <CodeIcon />, description: 'Server-side development using Node.js.' },
  { name: 'Database Management', icon: <StorageIcon />, description: 'Managing and optimizing database systems.' },
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
});

const SkillIcon = styled(Box)({
  fontSize: '32px', // Adjust icon size
  marginRight: '16px',
});

// Define the gradient background for skill labels
const gradientBackground = 'linear-gradient(250deg, #f6d365 50%, #fda085 50%)';

const SkillLabel = styled(Typography)({
  background: gradientBackground,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  fontWeight: 'bold',
  fontSize: '16px', // Adjust font size
});

const SkillDescription = styled(Typography)({
  fontSize: '14px',
  color: '#555',
});

const Skills = React.forwardRef((props, ref) => {
  return (
    <Box sx={{ padding: '10px 20px', marginTop: '0', color: '#333333', borderRadius: '12px', maxWidth: '1200px', margin: '0 auto' }} ref={ref} id="skills">
      <Typography variant="h5" gutterBottom align="center" marginBottom={4}>
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
