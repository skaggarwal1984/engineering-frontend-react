import React, { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, CardMedia, Chip } from '@mui/material';
import { styled } from '@mui/system';

// Define your color palette
const darkBlue = '#1976d2'; // Dark blue for text and accents
const lightGrey = '#f9f9f9'; // Light grey for backgrounds
const white = '#ffffff'; // White for text on dark backgrounds

// Styled components
const Section = styled('div')({
  padding: '70px 20px 50px', // Added extra padding at the top
  backgroundColor: white, // Changed to white
});

const ArticleCard = styled(Card)({
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

const CardContentStyled = styled(CardContent)({
  padding: '20px',
  backgroundColor: white, // Ensure background is white for content
  color: darkBlue,
  borderBottomLeftRadius: '12px',
  borderBottomRightRadius: '12px',
});

const TitleText = styled(Typography)({
  fontWeight: 'bold',
  color: darkBlue, // Set color to darkBlue to align with theme
});

const ButtonStyled = styled(Button)({
  background: darkBlue,
  color: white,
  '&:hover': {
    background: '#004ba0', // Darker shade for hover
  },
});

const TagsContainer = styled('div')({
  marginTop: '10px',
  marginBottom: '10px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
});

const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px', // Optional, for spacing
});

const Articles = React.forwardRef((props, ref) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Mock data for demonstration
        const mockData = [
          {
            title: 'The 7Es Approach: My take on excelling as an Engineering Manager',
            description: 'When I reflect on my past experiences in managing teams, I have observed that the 7 Es play a crucial role in being successful engineering manager. There is also a discernible order of priority.',
            image: 'https://via.placeholder.com/600x150.png?text=7Es+Approach',
            link: '/articles/article-1',
            tags: ["Engineering Manager"]
          },
          {
            title: 'The 7Ms Approach: My take on excelling as an Engineer',
            description: 'When I reflect on my past experiences in managing teams, I have observed that the 7 Ms play a crucial role in being great engineer. There is also a discernible order of priority.',
            image: 'https://via.placeholder.com/600x150.png?text=7Ms+Approach',
            link: '/articles/article-2',
            tags: ["Engineer"]
          },
          {
            title: 'The 7Cs: My take on loving your workplace',
            description: 'When I reflect on my past experiences in managing teams, I have observed that the 7 Cs play a crucial role in one decision to stay long-term. There is also a discernible order of priority.',
            image: 'https://via.placeholder.com/600x150.png?text=7Cs+Connection',
            link: '/articles/article-3',
            tags: ["Workplace"]
          },
        ];

        setArticles(mockData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Section ref={ref} id="articles">
      <Typography variant="h4" gutterBottom align="center" marginBottom={4} color={darkBlue}>
        Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ArticleCard>
              <ProjectMedia
                image={article.image}
                title={article.title}
              />
              <CardContentStyled>
                <TitleText variant="h6" gutterBottom>{article.title}</TitleText>
                <Typography variant="body2" paragraph>
                  {article.description}
                </Typography>
                <TagsContainer>
                  {Array.isArray(article.tags) && article.tags.map((tag, idx) => (
                    <Chip key={idx} label={tag} color="primary" variant="outlined" />
                  ))}
                </TagsContainer>
                <ButtonContainer>
                  <ButtonStyled href={article.link} variant="contained">
                    Read More
                  </ButtonStyled>
                </ButtonContainer>
              </CardContentStyled>
            </ArticleCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

export default Articles;
