import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategorieList = ({ category }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await axios.get(`"https://fakestoreapi.com/products/category=${category}`);
        setElements(response.data);
      } catch (error) {
        console.error('Error fetching elements:', error);
      }
    };

    fetchElements();
  }, [category]);

  return (
    <div className="element-list">
      <h2>Elements in Category: {category}</h2>
      <ul>
        {elements.map(element => (
          <li key={element.id}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategorieList;
