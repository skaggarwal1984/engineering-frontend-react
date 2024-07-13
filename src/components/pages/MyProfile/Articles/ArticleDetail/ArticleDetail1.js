import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../../../../Header/Header';

// Define your color palette
const white = '#ffffff'; // White for background
const darkBlue = '#1976d2'; // Dark blue for text and accents
const textColor = '#333'; // Default text color

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

const PizzaContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Adjusted min-width for larger cards
  gap: '60px', // Increased gap between pizza slices for more space
  justifyContent: 'center',
  marginBottom: '60px', // Increased bottom margin for more space
});

const PizzaSlice = styled(Box)(({ sliceColor }) => ({
  width: '100%',
  padding: '20px',
  borderRadius: '15px', // Rounded corners for a modern look
  backgroundColor: sliceColor,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: `0 4px 8px rgba(0, 0, 0, 0.1)`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 6px 12px rgba(0, 0, 0, 0.2)`,
  },
}));

const SliceLabel = styled(Typography)({
  color: white,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '15px', // Increased margin for more separation
});

const SliceContent = styled(Typography)({
  color: textColor,
  fontSize: '1rem',
  textAlign: 'center',
  lineHeight: '1.5',
  margin: '0',
});

const ActionButton = styled(Button)({
  backgroundColor: darkBlue,
  color: white,
  '&:hover': {
    backgroundColor: '#004ba0', // Darker shade on hover
  },
  marginTop: '40px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
});

const ArticleDetail1 = React.forwardRef((props, ref) => {
  return (
    <>
      <Header />
      <PageContainer ref={ref} id="article-detail-2">
        <ArticleTitle>The 7Ms Approach: My Take on Excelling as an Engineer</ArticleTitle>
        <IntroductionText>
          When I reflect on my past experiences in managing teams, I've observed that the 7 Ms play a crucial role in being great engineer. There’s also a discernible order of priority.
        </IntroductionText>

        <PizzaContainer>
          <PizzaSlice sliceColor="#FFDDC1">
            <SliceLabel>🎓 Mastery</SliceLabel>
            <SliceContent>
              True mastery is not merely about proficiency but about a relentless commitment to transcend the boundaries of our current roles and responsibilities.
            </SliceContent>
          </PizzaSlice>

          <PizzaSlice sliceColor="#FFABAB">
            <SliceLabel>🚀 Mobilize</SliceLabel>
            <SliceContent>
              Mobilize is to rally the team along, inspire a collective pursuit of triumph, even amidst adversities. It is about nurturing a culture of unwavering resolve.
            </SliceContent>
          </PizzaSlice>

          <PizzaSlice sliceColor="#FFC3A0">
            <SliceLabel>📊 Measure</SliceLabel>
            <SliceContent>
              By rigorously evaluating our performance through data-driven insights, we gain a clear understanding of our strengths and areas for development, and become better and better.
            </SliceContent>
          </PizzaSlice>

          <PizzaSlice sliceColor="#FF677D">
            <SliceLabel>🔝 More</SliceLabel>
            <SliceContent>
              The pursuit of greatness demands that we transcend the confines of our comfort zones and embrace the allure of uncharted territories.
            </SliceContent>
          </PizzaSlice>

          <PizzaSlice sliceColor="#D4A5A5">
            <SliceLabel>🌟 Mentor</SliceLabel>
            <SliceContent>
              Mentorship stands as a potent conduit for personal and professional growth—an invaluable exchange of knowledge, wisdom, and experiences that illuminates the path to success for both mentor and mentee alike.
            </SliceContent>
          </PizzaSlice>

          <PizzaSlice sliceColor="#C2C2F0">
            <SliceLabel>⚖️ Moderate</SliceLabel>
            <SliceContent>
              Effective moderation transcends mere facilitation; it embodies an unwavering commitment to fostering an inclusive space where diverse perspectives converge and collective wisdom blossoms.
            </SliceContent>
          </PizzaSlice>

          <PizzaSlice sliceColor="#B9FBC0">
            <SliceLabel>🔧 Modernize</SliceLabel>
            <SliceContent>
              Modernize is go beyond conventional boundaries and reimagine the paradigms of possibility.
            </SliceContent>
          </PizzaSlice>
        </PizzaContainer>
      </PageContainer>
    </>
  );
});

export default ArticleDetail1;
