import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../../../../Header/Header';

// Define your color palette
const white = '#ffffff'; // White for background
const darkBlue = '#1976d2'; // Dark blue for text and accents
const textColor = '#333'; // Default text color
const borderColor = '#e0e0e0'; // Light grey border color
const shadowColor = 'rgba(0, 0, 0, 0.1)'; // Soft shadow color

// Card colors
const cardColors = [
  '#FFABAB', // Light coral
  '#FFC3A0', // Light pink
  '#FF677D', // Light red
  '#D4A5A5', // Light brown
  '#C2C2F0', // Light lavender
  '#B9FBC0', // Light mint
  '#FFDDC1'  // Light peach
];

// Styled components
const PageContainer = styled(Container)({
  marginTop: '100px', // Ensure there's space below the header
  padding: '20px',
  backgroundColor: white, // White background
  color: textColor, // Default text color
  textAlign: 'center',
});

const ArticleTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '40px', // Increased margin for more separation
  fontSize: '2.5rem',
  color: darkBlue, // Dark blue for the title
});

const IntroductionText = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: '1.6',
  color: textColor,
  marginBottom: '40px', // Increased margin for more separation
  textAlign: 'center',
});

const CardContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', // Adjusted min-width for larger cards
  gap: '60px', // Increased gap between cards for more space
  justifyContent: 'center',
  marginBottom: '60px', // Increased bottom margin for more space
  padding: '0 20px',
});

const Card = styled(Box)(({ cardColor }) => ({
  width: '100%',
  padding: '20px',
  borderRadius: '15px', // Rounded corners for a modern look
  backgroundColor: cardColor, // Apply card-specific background color
  border: `1px solid ${borderColor}`, // Light grey border
  boxShadow: `0 4px 8px ${shadowColor}`, // Soft shadow for depth
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: `0 8px 16px ${shadowColor}`, // Enhanced shadow on hover
  },
}));

const CardLabel = styled(Typography)({
  color: darkBlue, // Dark blue for labels
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '15px', // Increased margin for more separation
  textAlign: 'center',
});

const CardContent = styled(Typography)({
  color: textColor,
  fontSize: '1rem',
  textAlign: 'center',
  lineHeight: '1.6',
  margin: '0',
});

const ArticleDetail2 = React.forwardRef((props, ref) => {
  return (
    <>
      <Header />
      <PageContainer ref={ref} id="article-detail-2">
        <ArticleTitle>The 7Cs: The Connection Between One and One’s Workplace</ArticleTitle>
        <IntroductionText>
          When I reflect on my past experiences in managing teams, I've observed that the 7 Cs play a crucial role in one's decision to stay long-term. There’s also a discernible order of priority.
        </IntroductionText>
        <CardContainer>
          {cardColors.map((color, index) => (
            <Card key={index} cardColor={color}>
              <CardLabel>
                {index === 0 && '💰 Compensation'}
                {index === 1 && '📈 Company'}
                {index === 2 && '🏢 Credible Leaders'}
                {index === 3 && '🌍 Culture'}
                {index === 4 && '🚀 Career'}
                {index === 5 && '🎓 Coaching'}
                {index === 6 && '🤝 Celebration'}
              </CardLabel>
              <CardContent>
                {index === 0 && 'It starts with compensation and revisions, which define the value of one’s contributions. It is foundational, demonstrating that efforts are recognized and appreciated, and keeps trust intact.'}
                {index === 1 && 'The growth prospects of the company and its office location play a crucial role.'}
                {index === 2 && 'The leader’s credibility matters immensely. One wants to work with a leader who is trustworthy, reliable, mentors, and inspires.'}
                {index === 3 && 'Culture is crucial. A positive culture means an inclusive environment where everyone feels heard and valued. Whether it’s a collaborative spirit or a go-getter attitude, a strong culture keeps one engaged and dedicated.'}
                {index === 4 && 'One should be able to see a future within the company.'}
                {index === 5 && 'Great leaders act as mentors and coaches. When team members receive support and guidance from leaders, they generally like to stay and grow within the organization.'}
                {index === 6 && 'When the deserving work is celebrated on time, one feels valuable'}
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </PageContainer>
    </>
  );
});

export default ArticleDetail2;
