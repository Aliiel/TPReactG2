import React, { useState, useEffect } from 'react';
import axios from 'axios';



const AffiCategories = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products;

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="app">
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={category => setActiveCategory(category)}
      />

      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            {/* Autres détails du produit */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiCategories;