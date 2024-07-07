import React, { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Define the gradient background for article cards
const gradientBackground = 'linear-gradient(250deg, #f6d365 50%, #fda085 50%)';

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

const ArticleCard = styled(Card)({
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const CardContentStyled = styled(CardContent)({
  padding: '20px',
  backgroundColor: '#ffffff',
  color: '#333333',
  borderBottomLeftRadius: '12px',
  borderBottomRightRadius: '12px',
});

const GradientText = styled(Typography)({
  background: gradientBackground,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  fontWeight: 'bold',
});

const ButtonStyled = styled(Button)({
  background: gradientBackground,
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const Articles = React.forwardRef((props, ref) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/articles');
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Section ref={ref} id="articles">
      <Typography variant="h5" gutterBottom align="center" marginBottom={4}>
        Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ArticleCard>
              <CardContentStyled>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                <GradientText variant="h6" gutterBottom>{article.title}</GradientText>
                <Typography variant="body2" paragraph>
                  {article.description}
                </Typography>
                <ButtonStyled href={article.link} variant="contained">
                  Read More
                </ButtonStyled>
              </CardContentStyled>
            </ArticleCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

export default Articles;
