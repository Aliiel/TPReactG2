import React from 'react';

const CategoryFilter = ({ products, activeCategory, onCategoryClick }) => {
  return (
    <div className="category-filter">
      <h2>Categories</h2>
      <ul>
        {products.map(category => (
          <li
            key={category}
            className={category === activeCategory ? 'active' : ''}
            onClick={() => onCategoryClick(category)}
          >
            {category}
            
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
