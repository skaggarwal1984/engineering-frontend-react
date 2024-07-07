import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Sample data for Projects
const sampleProjects = [
  { title: 'Project 1', description: 'Brief description of Project 1', link: '/projects/project-1', image: 'https://via.placeholder.com/150' },
  { title: 'Project 2', description: 'Brief description of Project 2', link: '/projects/project-2', image: 'https://via.placeholder.com/150' },
  { title: 'Project 3', description: 'Brief description of Project 3', link: '/projects/project-3', image: 'https://via.placeholder.com/150' },
];

// Styled components
const Section = styled('div')({
  padding: '10px 20px', // Adjusted padding to match Summary component
  marginTop: '0', // Removed any margin at the top
  color: '#333333',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxWidth: '1200px', // Added max-width for centering
  margin: '0 auto', // Center content
});

const ProjectCard = styled(Card)({
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const ProjectMedia = styled(CardMedia)({
  height: '150px',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
});

const ProjectContent = styled(CardContent)({
  padding: '20px',
  backgroundColor: '#ffffff',
  borderBottomLeftRadius: '12px',
  borderBottomRightRadius: '12px',
  color: '#333333',
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(250deg, #f6d365 50%, #fda085 50%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  fontWeight: 'bold',
});

const ButtonStyled = styled(Button)({
  color: '#ffffff',
  background: 'linear-gradient(250deg, #f6d365 50%, #fda085 50%)',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const Projects = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Typography variant="h5" gutterBottom align="center" marginBottom={4}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {sampleProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <ProjectMedia
                image={project.image}
                title={project.title}
              />
              <ProjectContent>
                <GradientText variant="h6" gutterBottom>
                  {project.title}
                </GradientText>
                <Typography variant="body2" paragraph>
                  {project.description}
                </Typography>
                <ButtonStyled href={project.link} variant="contained">
                  Learn More
                </ButtonStyled>
              </ProjectContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

export default Projects;
