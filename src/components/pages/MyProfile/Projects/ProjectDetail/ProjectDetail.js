import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../../../../Header/Header';

const gradientBackground = 'linear-gradient(120deg, #f6d365 0%, #fda085 0%)';

// Define some styling for the project page
const PageContainer = styled(Container)({
  marginTop: '100px', // Ensure there's space below the header
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
  color: '#333',
});

const ProjectTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '20px',
  fontSize: '2rem',
  background: gradientBackground,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  textAlign: 'center',
});

const ProjectSection = styled(Box)({
  marginBottom: '20px',
  padding: '20px',
  background: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '10px',
  fontSize: '1.5rem',
  color: gradientBackground,
});

const SectionContent = styled(Typography)({
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#333',
});

const ProjectDetail = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <ProjectTitle>Project Overview: The Big Data Transformation Initiative</ProjectTitle>

        <ProjectSection>
          <SectionTitle>🔍 Objective</SectionTitle>
          <SectionContent>
            The Big Data Transformation Initiative aimed to overhaul our existing data infrastructure to better handle large-scale data processing and analytics. This project was crucial for enabling real-time data insights and improving decision-making capabilities.
          </SectionContent>
        </ProjectSection>

        <ProjectSection>
          <SectionTitle>🛠️ Approach</SectionTitle>
          <SectionContent>
            We implemented a robust architecture using cloud-based solutions and advanced data processing frameworks. The approach included migrating legacy systems, integrating new data pipelines, and ensuring seamless data flow and accessibility across the organization.
          </SectionContent>
        </ProjectSection>

        <ProjectSection>
          <SectionTitle>🚀 Impact</SectionTitle>
          <SectionContent>
            The initiative resulted in a 40% increase in data processing efficiency and a 30% reduction in operational costs. It also enhanced our ability to generate actionable insights, leading to more informed strategic decisions.
          </SectionContent>
        </ProjectSection>

        <ProjectSection>
          <SectionTitle>📊 Challenges</SectionTitle>
          <SectionContent>
            One of the major challenges was managing the transition without disrupting ongoing operations. We addressed this through careful planning, phased implementation, and rigorous testing.
          </SectionContent>
        </ProjectSection>

        <ProjectSection>
          <SectionTitle>🌟 Team Contribution</SectionTitle>
          <SectionContent>
            The success of this project was due to the exceptional collaboration of cross-functional teams, including data engineers, developers, and project managers. Their dedication and expertise were instrumental in achieving our goals.
          </SectionContent>
        </ProjectSection>

        <SectionContent>
          This project was a significant milestone in our journey towards becoming a data-driven organization. Feel free to share your thoughts or ask questions in the comments below!
        </SectionContent>
      </PageContainer>
    </>
  );
};

export default ProjectDetail;
