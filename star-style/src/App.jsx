import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RecommendationSection from './components/RecommendationSection';
import { getProducts } from './api';
import './index.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <RecommendationSection recommendations={products} />
      </main>
    </div>
  );
};

export default App;
