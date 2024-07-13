import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, Button, TextField, Box, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';

// Define your color palette
const gradientBackground = 'linear-gradient(500deg, #f6d365 0%, #fda085 100%)'; // Light gradient background
const darkBlue = '#1976d2'; // Dark blue for text and accents
const white = '#ffffff'; // White for text on dark backgrounds
const textColor = '#333'; // Default text color

const MainContent = styled('section')({
  padding: '30px 20px',
  marginTop: '100px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: white,
  color: textColor,
  boxSizing: 'border-box', // Ensure padding and borders are included in element's total width and height
});

const VillaCard = styled(Card)({
  margin: '10px 0', // Reduced margin to ensure boxes fit within the viewport
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  boxSizing: 'border-box', // Ensure padding and borders are included in element's total width and height
});

const VillaTitle = styled(Typography)({
  fontWeight: 'bold',
  color: darkBlue, // Darker blue for the title
});

const VillaDescription = styled(Typography)({
  color: textColor, // Default text color
});

const Felicity = () => {
  const [properties, setProperties] = useState([]);
  const [architects, setArchitects] = useState([]);
  const [propertyInput, setPropertyInput] = useState({
    name: '',
    siteLink: '',
    size: '',
    photo: '',
    explored: false,
    remarks: ''
  });
  const [architectInput, setArchitectInput] = useState({
    name: '',
    address: '',
    explored: false,
    quotationAmount: '',
    quotationFile: '',
    remarks: ''
  });

  useEffect(() => {
    const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
    const storedArchitects = JSON.parse(localStorage.getItem('architects')) || [];
    setProperties(storedProperties);
    setArchitects(storedArchitects);
  }, []);

  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(properties));
  }, [properties]);

  useEffect(() => {
    localStorage.setItem('architects', JSON.stringify(architects));
  }, [architects]);

  const handleAddProperty = () => {
    setProperties([...properties, propertyInput]);
    setPropertyInput({
      name: '',
      siteLink: '',
      size: '',
      photo: '',
      explored: false,
      remarks: ''
    });
  };

  const handleDeleteProperty = (index) => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  const handleAddArchitect = () => {
    setArchitects([...architects, architectInput]);
    setArchitectInput({
      name: '',
      address: '',
      explored: false,
      quotationAmount: '',
      quotationFile: '',
      remarks: ''
    });
  };

  const handleDeleteArchitect = (index) => {
    setArchitects(architects.filter((_, i) => i !== index));
  };

  const handlePropertyChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPropertyInput({
      ...propertyInput,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleArchitectChange = (e) => {
    const { name, value, type, checked } = e.target;
    setArchitectInput({
      ...architectInput,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <MainContent>
      <Typography variant="h4" gutterBottom>
        Felicity: Your Home Construction Hub
      </Typography>
      <Typography variant="h6" paragraph>
        Explore villa inspirations, maintain data, list requirements, and select your architect or civil engineer.
      </Typography>
      
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Properties
        </Typography>
        <TextField
          label="Property Name"
          name="name"
          value={propertyInput.name}
          onChange={handlePropertyChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Property Site Link"
          name="siteLink"
          value={propertyInput.siteLink}
          onChange={handlePropertyChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Villa Size"
          name="size"
          value={propertyInput.size}
          onChange={handlePropertyChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Villa Photo URL"
          name="photo"
          value={propertyInput.photo}
          onChange={handlePropertyChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={propertyInput.explored}
              onChange={handlePropertyChange}
              name="explored"
            />
          }
          label="Explored"
        />
        <TextField
          label="Remarks"
          name="remarks"
          value={propertyInput.remarks}
          onChange={handlePropertyChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddProperty}>
          Add Property
        </Button>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          {properties.map((property, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <VillaCard>
                <CardContent>
                  <VillaTitle variant="h6" gutterBottom>
                    {property.name}
                  </VillaTitle>
                  <VillaDescription paragraph>
                    <strong>Site Link:</strong> <a href={property.siteLink} target="_blank" rel="noopener noreferrer">{property.siteLink}</a><br />
                    <strong>Size:</strong> {property.size}<br />
                    <strong>Photo:</strong> <img src={property.photo} alt={property.name} style={{ width: '100%' }} /><br />
                    <strong>Explored:</strong> {property.explored ? 'Yes' : 'No'}<br />
                    <strong>Remarks:</strong> {property.remarks}
                  </VillaDescription>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteProperty(index)}>
                    Delete
                  </Button>
                </CardContent>
              </VillaCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Box>
        <Typography variant="h5" gutterBottom>
          Architects
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={architectInput.name}
          onChange={handleArchitectChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={architectInput.address}
          onChange={handleArchitectChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={architectInput.explored}
              onChange={handleArchitectChange}
              name="explored"
            />
          }
          label="Explored"
        />
        <TextField
          label="Quotation Amount"
          name="quotationAmount"
          value={architectInput.quotationAmount}
          onChange={handleArchitectChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quotation File URL"
          name="quotationFile"
          value={architectInput.quotationFile}
          onChange={handleArchitectChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Remarks"
          name="remarks"
          value={architectInput.remarks}
          onChange={handleArchitectChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleAddArchitect}>
          Add Architect
        </Button>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          {architects.map((architect, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <VillaCard>
                <CardContent>
                  <VillaTitle variant="h6" gutterBottom>
                    {architect.name}
                  </VillaTitle>
                  <VillaDescription paragraph>
                    <strong>Address:</strong> {architect.address}<br />
                    <strong>Explored:</strong> {architect.explored ? 'Yes' : 'No'}<br />
                    <strong>Quotation Amount:</strong> {architect.quotationAmount}<br />
                    <strong>Quotation File:</strong> <a href={architect.quotationFile} target="_blank" rel="noopener noreferrer">{architect.quotationFile}</a><br />
                    <strong>Remarks:</strong> {architect.remarks}
                  </VillaDescription>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteArchitect(index)}>
                    Delete
                  </Button>
                </CardContent>
              </VillaCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainContent>
  );
};

export default Felicity;
