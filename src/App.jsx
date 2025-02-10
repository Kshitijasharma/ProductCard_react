import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductDetailsPage from './ProductDetailsPage';
import LoginPage from './LoginPage';

const App = () => {
  const [productData, setProductData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Passing setProductData to ProductForm */}
        <Route
          path="/product-form"
          element={<ProductForm setProductData={setProductData} />}
        />

        {/* Passing productData to ProductDetailsPage */}
        <Route
          path="/product-details"
          element={<ProductDetailsPage productData={productData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
