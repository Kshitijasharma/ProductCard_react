import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

const ProductForm = ({ setProductData }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const [imageName, setImageName] = useState(null); // Store the image file name
  const navigate = useNavigate();

  //handle any changes if occured
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle image changes
  const handleImageChange = (e) => {
    const file = e.target.files[0]; //select the first file selected
    if (file) {
      //if file exists
      setFormData({ ...formData, image: file });
      setImageName(file.name); // Set the image name when file is selected
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductData(formData);
    alert('Product saved successfully!');
    navigate('/product-details');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ADD8E6',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '30px',
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          align="center"
          style={{ marginBottom: '20px' }}
        >
          Add Product
        </Typography>

        <TextField
          name="name"
          label="Product Name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
          variant="outlined"
        />
        <TextField
          name="price"
          label="Price"
          fullWidth
          margin="normal"
          value={formData.price}
          onChange={handleChange}
          required
          variant="outlined"
        />
        <TextField
          name="description"
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
          required
          variant="outlined"
        />

        <Button
          variant="contained"
          component="label"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Upload Image
          <input type="file" hidden onChange={handleImageChange} />
        </Button>

        {/* Display only the image file name */}
        {imageName && (
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            style={{ marginTop: '10px', fontSize: '14px' }}
          >
            Uploaded Image: {imageName}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
