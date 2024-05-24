import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

const App = () => {
  const [elements, setElements] = useState(["Random text 1", "Random text 2", "Random text 3"]);
  const [newElement, setNewElement] = useState('');

  const handleDelete = (index) => {
    setElements(elements.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    if (newElement.trim()) {
      setElements([...elements, newElement.trim()]);
      setNewElement('');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="div" gutterBottom>
        Your Name: Bhavesh Jadhav
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Mail ID: bhavesh002jadhav@gmail.com 
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Phone Number: +91 9067872194
      </Typography>
      <TextField
        label="New Element"
        variant="outlined"
        value={newElement}
        onChange={(e) => setNewElement(e.target.value)}
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleAdd} fullWidth>
        Add Element
      </Button>
      <List>
        {elements.map((element, index) => (
          <ListItem key={index}>
            <ListItemText primary={element} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
