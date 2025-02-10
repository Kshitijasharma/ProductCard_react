import React from 'react';

//import the CARD component
import {
  Card,
  CardContent, //responsible for the data written inside card
  CardMedia, //can display image or video within the card
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductDetailsPage = ({ productData }) => {
  const navigate = useNavigate();

  return (
    <div
      //background styling
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ADD8E6',
        padding: '20px',
      }}
    >
      <Card
        style={{
          width: '400px',
          maxWidth: '90%',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/*display the image*/}
        <CardMedia
          component="img"
          image={
            productData.image
              ? URL.createObjectURL(productData.image)
              : '/placeholder-image.jpg'
          }
          alt="Product Image"
          style={{
            width: '100%', // Ensures it fills the card width
            height: 'auto', // Allows the image to scale proportionally
            maxHeight: '300px', // Prevents the image from being too large
            objectFit: 'cover', // Ensures the image fills the container without distortion
          }}
        />

        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{ textAlign: 'center', marginBottom: '10px' }}
          >
            {productData.name} {/*display the product name*/}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ textAlign: 'center', marginBottom: '10px' }}
          >
            Price: ${productData.price} {/*display the product price*/}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginBottom: '20px' }}
          >
            {productData.description} {/*display the product description*/}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          style={{ margin: '10px', textTransform: 'none' }}
        >
          Go Back {/*navigate to the previous page*/}
        </Button>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
