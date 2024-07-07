import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import { Box, Table, TableHead, TableBody, TableRow, TableCell, Paper, CircularProgress, Typography, Button } from '@mui/material';

const BillReader = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setItems([]);
      setError(null);
    }
  };

  const extractTextFromImage = async () => {
    if (!image) {
      setError("No image uploaded");
      return;
    }

    setLoading(true);
    setError(null);
    console.log("Starting OCR processing...");

    try {
      const { data: { text } } = await Tesseract.recognize(image, 'eng');
      console.log('OCR Text:', text);
      const extractedItems = parseBillText(text);
      console.log('Extracted Items:', extractedItems); // Log the extracted items
      setItems(extractedItems);
    } catch (error) {
      console.error("Error recognizing text from image:", error);
      setError("Error recognizing text from image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const parseBillText = (text) => {
    const lines = text.split('\n');
    const items = [];
    let parsingItems = false;

    console.log('Parsed Lines:', lines); // Log each line to understand the structure

    for (const line of lines) {
      console.log('Line:', line); // Log each line to understand the structure

      if (parsingItems) {
        const itemMatch = line.match(/^(\d{1,2})\s+(.+?)\s+(\d+)\s+(\d+\.\d+)\s+(\d+\.\d+)\s+(\d+\.\d+)\s+(\d+\.\d+)$/);
        if (itemMatch) {
          const [_, id, name, qty, price, __, ___, total] = itemMatch;
          console.log('Item Match:', itemMatch); // Log matched items
          items.push({ id, name, qty, price, total });
        } else if (line.includes("Items")) {
          parsingItems = false;
        }
      } else if (line.includes("Item Name") || line.includes("Description")) {
        parsingItems = true;
      }
    }

    return items;
  };

  useEffect(() => {
    if (image) {
      console.log("Image uploaded:", image);
    }
  }, [image]);

  return (
    <Box sx={{ padding: '20px', marginTop: '100px' }}>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleImageUpload}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Bill Image
        </Button>
      </label>
      {image && (
        <Box sx={{ marginTop: '20px' }}>
          <img src={image} alt="Bill" style={{ width: '100%', border: '1px solid #ddd' }} />
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={extractTextFromImage} 
            disabled={loading} 
            sx={{ marginTop: '20px' }}
          >
            {loading ? <CircularProgress size={24} /> : 'Extract Text'}
          </Button>
        </Box>
      )}
      {error && <Typography color="error" sx={{ marginTop: '20px' }}>{error}</Typography>}
      {items.length >= 0 && (
        <Paper sx={{ marginTop: '20px', padding: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item ID</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Box>
  );
};

export default BillReader;
