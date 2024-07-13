import React from 'react';
import { Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { styled } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

// Sample data for Projects with detailed sections and achievements
const sampleProjects = [
  {
    title: 'Recommendation Product',
    year: '2022',
    teamSize: '50+ Members',
    myRole: 'Engineering Director',
    keyAchievements: 'Expanded role to lead Recommendation Product. Oversaw a team of 50+ people, improving system efficiency and delivering scalable solutions.',
    recognitions: 'Recognized for excellent leadership and project outcomes.',
    technicalSkills: ['GCP', 'GraphQL API', 'Spring Boot', 'Java', 'Python', 'Kafka', 'Data Engineering', 'Big Query', 'Vertex AI', 'Cassandra', 'React'],
    leadershipMetrics: {
      performance: 85,
      efficiency: 90,
      cloudOptimization: 80,
      innovation: 90,
      teamwork: 95,
      leadership: 90,
      communication: 85,
    },
    link: '/projects/recommendation-product',
  },
  {
    title: 'Personalization Product',
    year: '2021-2022',
    teamSize: 'Building Team from Ground Up',
    myRole: 'Senior Engineering Manager',
    keyAchievements: 'Built and led a team for Personalization product, which was successfully transitioned to Recommendation product.',
    recognitions: 'First hire and built the team from scratch.',
    technicalSkills: ['GCP', 'GraphQL API', 'Spring Boot', 'Java', 'Python', 'Kafka', 'Data Engineering', 'Big Query', 'Vertex AI', 'Cassandra', 'Neo4j Graph Database', 'React'],
    leadershipMetrics: {
      performance: 80,
      efficiency: 85,
      cloudOptimization: 80,
      innovation: 85,
      teamwork: 90,
      leadership: 85,
      communication: 80,
    },
    link: '/projects/personalization-product',
  },
  {
    title: 'AWS Architecture Foundations',
    year: '2021',
    teamSize: '10+ Members',
    myRole: 'Specialist Master',
    keyAchievements: 'Built foundational components on AWS architecture in a telecom account for 6 months.',
    recognitions: 'Delivered high-quality architectural solutions on AWS.',
    technicalSkills: ['AWS', 'API Management', 'React'],
    leadershipMetrics: {
      performance: 75,
      efficiency: 80,
      cloudOptimization: 85,
      innovation: 70,
      teamwork: 75,
      leadership: 80,
      communication: 75,
    },
    link: '/projects/aws-architecture-foundations',
  },
  {
    title: 'API Management Strategy Assessment',
    year: '2021',
    teamSize: '12 Weeks Program',
    myRole: 'Specialist Master',
    keyAchievements: 'Assessed API management strategy for Life insurance account through interviews and delivered a comprehensive technology roadmap.',
    recognitions: 'Impressed TA leadership in India with the technology roadmap.',
    technicalSkills: ['AWS', 'API Management Tools', 'API Strategy', 'API Governance'],
    leadershipMetrics: {
      performance: 90,
      efficiency: 85,
      cloudOptimization: 75,
      innovation: 85,
      teamwork: 80,
      leadership: 90,
      communication: 85,
    },
    link: '/projects/api-management-strategy-assessment',
  },
  {
    title: 'Product Documentation Site',
    year: '2015-2020',
    teamSize: '30+ Members',
    myRole: 'Specialist Master',
    keyAchievements: 'Led the team in building and maintaining a technology company’s product documentation site.',
    recognitions: 'Received accolades for effective team management and project delivery.',
    technicalSkills: ['Spring Boot', 'Kafka', 'Elastic Search', 'MongoDB', 'Drupal', 'Angular'],
    leadershipMetrics: {
      performance: 80,
      efficiency: 85,
      cloudOptimization: 70,
      innovation: 80,
      teamwork: 85,
      leadership: 85,
      communication: 80,
    },
    link: '/projects/product-documentation-site',
  },
  {
    title: 'Property Insurance Support',
    year: '2014',
    teamSize: '10+ Members',
    myRole: 'Team Lead',
    keyAchievements: 'Led a team in maintaining and supporting a property insurance company’s systems.',
    recognitions: 'Acknowledged for effective support and system maintenance.',
    technicalSkills: ['Spring MVC', 'Apache Tomcat'],
    leadershipMetrics: {
      performance: 75,
      efficiency: 80,
      cloudOptimization: 65,
      innovation: 70,
      teamwork: 80,
      leadership: 75,
      communication: 75,
    },
    link: '/projects/property-insurance-support',
  },
  {
    title: 'Auto Insurance Assessment and Redesign',
    year: '2012-2013',
    teamSize: '20+ Members',
    myRole: 'Team Lead',
    keyAchievements: 'Led a team in assessing and redesigning products for a major auto insurance company through APIs.',
    recognitions: 'Successfully redesigned product architecture and delivery.',
    technicalSkills: ['Spring', 'IBM Websphere Portal'],
    leadershipMetrics: {
      performance: 80,
      efficiency: 75,
      cloudOptimization: 70,
      innovation: 80,
      teamwork: 85,
      leadership: 80,
      communication: 75,
    },
    link: '/projects/auto-insurance-assessment-redesign',
  },
  {
    title: 'Health Insurance Leadership',
    year: '2007-2011',
    teamSize: 'Onsite Leader Role',
    myRole: 'Individual Contributor',
    keyAchievements: 'Led the team in India for health insurance work while being onsite in the US from 2009 to 2012.',
    recognitions: 'Recognized for leadership and effective project management.',
    technicalSkills: ['Spring', 'IBM Websphere Portal'],
    leadershipMetrics: {
      performance: 85,
      efficiency: 80,
      cloudOptimization: 75,
      innovation: 80,
      teamwork: 85,
      leadership: 85,
      communication: 80,
    },
    link: '/projects/health-insurance-leadership',
  },
  {
    title: 'Account Module Development',
    year: '2006-2007',
    teamSize: 'Small Team',
    myRole: 'Trainee Software Engineer',
    keyAchievements: 'Worked on the development of an account module.',
    recognitions: 'Gained foundational experience in software development.',
    technicalSkills: ['JSP', 'Servlets'],
    leadershipMetrics: {
      performance: 70,
      efficiency: 65,
      cloudOptimization: 60,
      innovation: 70,
      teamwork: 70,
      leadership: 65,
      communication: 60,
    },
    link: '/projects/account-module-development',
  },
];

// Define your color palette
const darkBlue = '#1976d2'; // Dark blue for text and accents
const lightGrey = '#f9f9f9'; // Light grey for backgrounds
const white = '#ffffff'; // White for text on dark backgrounds

// Styled components
const Section = styled('div')({
  padding: '50px 20px',
  backgroundColor: lightGrey, // Light grey background for the section
});

const ProjectCard = styled(Card)({
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: white, // White background for the card
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

const ProjectContent = styled(CardContent)({
  padding: '20px',
  borderRadius: '12px',
  color: darkBlue,
  display: 'flex',
  flexDirection: 'column',
});

const TitleText = styled(Typography)({
  fontWeight: 'bold',
  color: darkBlue, // Dark blue for the title
  marginBottom: '10px',
});

const RoleTag = styled(Chip)({
  backgroundColor: darkBlue,
  color: white,
  fontWeight: 'bold',
  marginBottom: '15px',
});

const TeamSizeText = styled(Typography)({
  fontSize: '0.875rem',
  color: darkBlue,
  marginBottom: '15px',
});

const AchievementsText = styled(Typography)({
  fontSize: '0.875rem',
  color: darkBlue,
  marginBottom: '20px',
});

const RecognitionsTag = styled(Chip)({
  backgroundColor: '#ff9800',
  color: white,
  fontWeight: 'bold',
  marginTop: '20px',
});

const TechnicalSkillsContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '10px',
});

const SkillTag = styled(Chip)({
  backgroundColor: '#e0e0e0',
  color: darkBlue,
  fontWeight: 'bold',
});

const LeadershipMetricsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
});

const LeadershipMetric = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '5px',
  color: darkBlue,
});

const SectionTitle = styled(Typography)({
  fontWeight: 'bold',
  color: darkBlue,
  marginTop: '15px',
  marginBottom: '5px',
});

const ButtonStyled = styled(Button)({
  color: white,
  background: darkBlue,
  '&:hover': {
    background: '#004ba0', // Darker shade for hover
  },
  marginTop: '20px',
});

const Projects = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Typography variant="h4" gutterBottom align="center" marginBottom={4} color={darkBlue}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {sampleProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard>
              <ProjectContent>
                <Typography variant="h6" gutterBottom align="center" color={darkBlue}>
                  <AccessTimeIcon fontSize="small" /> {project.year}
                </Typography>
                <TitleText variant="h6" gutterBottom align="center">
                  {project.title}
                </TitleText>
                <Typography variant="body2" align="center" color={darkBlue} marginBottom="10px">
                  {project.teamSize}
                </Typography>
                <RoleTag label={project.myRole} />
                <SectionTitle variant="body1">
                  Key Achievements
                </SectionTitle>
                <AchievementsText variant="body2">
                  {project.keyAchievements}
                </AchievementsText>
                <TechnicalSkillsContainer>
                  {project.technicalSkills.map((skill, idx) => (
                    <SkillTag key={idx} label={skill} />
                  ))}
                </TechnicalSkillsContainer>
                <RecognitionsTag label={project.recognitions} />
                <LeadershipMetricsContainer>
                  {Object.entries(project.leadershipMetrics).map(([metric, value]) => (
                    <LeadershipMetric key={metric}>
                      <Typography variant="body2">{metric.replace(/([A-Z])/g, ' $1')}: </Typography>
                      <Typography variant="body2" color={darkBlue}>{value}%</Typography>
                    </LeadershipMetric>
                  ))}
                </LeadershipMetricsContainer>
              </ProjectContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

export default Projects;
