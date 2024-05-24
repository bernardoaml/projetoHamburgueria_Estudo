import React from 'react';
import Product from '../Product/index';
import styled from 'styled-components';

const ProductListDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2.8vw 2.8vw;
  padding: 10px 20px;

  @media (min-width: 1440px) {
    gap: 40px 40px;
  }

  @media (max-width: 900px) {
    display: block;
    white-space:nowrap;
    grid-template-columns: none;
    gap: 0 0;
    width: 100%;
    overflow-y: hidden;
    padding: 10px 10px;
  }
`;

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <ProductListDiv>
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </ProductListDiv>
  );
};

export default ProductsList;
