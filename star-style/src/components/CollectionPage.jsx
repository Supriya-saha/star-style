import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCollection } from '../api'; // Implement this API function

const CollectionPage = () => {
  const { collectionName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCollection(collectionName);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [collectionName]);

  return (
    <div>
      <h2 className="text-2xl mb-4">{collectionName} Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg">{product.name}</h3>
            <p>{product.description}</p>
            <p className="mt-2 font-bold">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
