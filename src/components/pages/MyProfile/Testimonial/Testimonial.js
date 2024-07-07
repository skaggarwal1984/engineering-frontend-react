import React, { useState } from 'react';
import { Typography, TextField, Button, styled, Box } from '@mui/material';

// Define gradient background for section and button
const gradientBackground = 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)';

const Section = styled(Box)({
  padding: '30px',
  borderRadius: '12px',
  background: gradientBackground,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '30px',
  marginTop: '20px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const ButtonStyled = styled(Button)({
  color: '#ffffff',
  background: gradientBackground,
  '&:hover': {
    background: 'linear-gradient(135deg, #fda085 0%, #f6d365 100%)',
  },
});

const TextFieldStyled = styled(TextField)({
  marginBottom: '20px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#ffffff',
  },
  '& .MuiInputLabel-root': {
    color: '#333333',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#333333',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#007bff',
  },
});

const testimonies = [
  "Sandeep's leadership and technical expertise have significantly impacted our project's success. His ability to guide and motivate the team is outstanding.",
  "Working with Sandeep has been a game-changer for our organization. His strategic approach and innovative solutions have driven remarkable results.",
  "Sandeep's dedication and vision have greatly enhanced our engineering practices. His contributions have been invaluable to our team’s growth and success.",
];

const Testimonial = () => {
  const [testimony, setTestimony] = useState('');

  const handleTestimonyChange = (event) => {
    setTestimony(event.target.value);
  };

  const handleTestimonySubmit = () => {
    alert('Testimony submitted!');
    setTestimony('');
  };

  return (
    <Section>
      <Typography variant="h5" gutterBottom>
        What Others Say
      </Typography>
      {testimonies.map((text, index) => (
        <Typography key={index} variant="body1" paragraph>
          {text}
        </Typography>
      ))}
      <Typography variant="h6" gutterBottom>
        Share Your Experience
      </Typography>
      <TextFieldStyled
        label="Share your experience"
        multiline
        rows={4}
        variant="outlined"
        value={testimony}
        onChange={handleTestimonyChange}
        fullWidth
      />
      <ButtonStyled onClick={handleTestimonySubmit}>Submit</ButtonStyled>
    </Section>
  );
};

export default Testimonial;
