import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../../../../Header/Header';

// Define a consistent color scheme and gradient background
const gradientBackground = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
const primaryColor = '#003366'; // Dark blue
const textColor = '#333333'; // Dark gray for text

// Define some styling for the article page
const PageContainer = styled(Container)({
  marginTop: '100px', // Ensure there's space below the header
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
  color: textColor,
});

const ArticleTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '20px',
  fontSize: '2rem',
  background: gradientBackground,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  textAlign: 'center',
});

const ArticleSection = styled(Box)({
  marginBottom: '20px',
  padding: '20px',
  background: '#ffffff',
  borderRadius: '12px',
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
  color: textColor,
});

const ArticleDetail = React.forwardRef((props, ref) => {
  return (
    <>
      <Header />
      <PageContainer ref={ref} id="article-detail">
        <ArticleTitle>The 7Es Approach: My Take on Engineering Leadership</ArticleTitle>

        <ArticleSection>
          <SectionTitle>🔍 EGO (Understanding Ego)</SectionTitle>
          <SectionContent>
            Understanding ego plays a crucial role in building the best team culture, where members feel valued, heard, empowered, and motivated to excel.
          </SectionContent>
        </ArticleSection>

        <ArticleSection>
          <SectionTitle>🛠️ ENABLE (Enabling Team)</SectionTitle>
          <SectionContent>
            Enabling the team is key, revolving around aspects like culture, clarity, ownership, processes, tools, and frameworks. This ensures the development of a top-notch engineering platform and team culture, with a team hungry to push for continuous improvement.
          </SectionContent>
        </ArticleSection>

        <ArticleSection>
          <SectionTitle>🚀 ENSURE (Ensuring Seamless Customer Experience)</SectionTitle>
          <SectionContent>
            Ensuring a seamless customer experience on the platform is paramount. From an engineering perspective, this includes non-functional requirements like latency, volume, and feature quality. Cultivating a team culture where this becomes the ethos drives success.
          </SectionContent>
        </ArticleSection>

        <ArticleSection>
          <SectionTitle>📊 ENTERPRISE (Staying Enterprise Compliant)</SectionTitle>
          <SectionContent>
            Staying enterprise compliant ensures readiness to scale and meet the demands of a larger functionality scope.
          </SectionContent>
        </ArticleSection>

        <ArticleSection>
          <SectionTitle>🔧 EMPOWER (Empowering Business)</SectionTitle>
          <SectionContent>
            Empowering business and enabling them with the capabilities to configure and apply, freeing up engineering capacity for other crucial tasks and avoiding redundancy.
          </SectionContent>
        </ArticleSection>

        <ArticleSection>
          <SectionTitle>🏆 EXEMPLARY (Exemplifying Best-in-Class Existing Features)</SectionTitle>
          <SectionContent>
            Delivering best-in-class existing features ensures customers have a superior experience and shop with confidence.
          </SectionContent>
        </ArticleSection>

        <ArticleSection>
          <SectionTitle>🌱 EXPAND (Expanding with New Features)</SectionTitle>
          <SectionContent>
            Innovating, ideating, and building new features/components ensures customers continue to experience world-class innovation and exploration.
          </SectionContent>
        </ArticleSection>
      </PageContainer>
    </>
  );
});

export default ArticleDetail;
