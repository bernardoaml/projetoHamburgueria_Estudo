import React, { useContext } from "react";
import styled from "styled-components";
import { formatToMoney } from "../../shared/formatToMoney";

import { CartItemsContext } from "../../shared/CartItemsContext";

const ProductCard = styled.div`
  width: 20vw;
  max-width: 300px;
  display: inline-block;
  margin: 10px 10px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  background-color: white;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.03);
    border: 2px solid #27ae60;
  }

  &:hover > button:not(.added) {
    background-color: #27ae60;
  }

  @media (max-width: 900px) {
    width: 280px;
  }
`;

const PicContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  text-align: center;
  margin: 0 auto;
`;

const ProductPic = styled.img`
  width: 70%;
  margin: 0 auto;
`;

const ProductName = styled.h3`
  text-align: left;
  padding: 10px 20px 0 20px;
  font-size: 1.4vw;

  @media (min-width: 1440px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

const Category = styled.p`
  padding: 12px 20px;
  font-size: 0.8vw;
  color: #828282;

  @media (min-width: 1440px) {
    font-size: 12px;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }
`;

const Price = styled.p`
  padding: 0 20px 20px 20px;
  font-weight: 500;
  font-size: 1vw;
  color: #27ae60;

  @media (min-width: 1440px) {
    font-size: 15px;
  }

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

const AddButton = styled.button`
  background: #bdbdbd;
  color: white;
  margin: 0 20px 20px;
  font-size: 1vw;
  transition: all 0.2s ease;

  @media (min-width: 1440px) {
    font-size: 15px;
  }

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

const Product = ({ product, onAddToCart }) => {
  const { cartItems } = useContext(CartItemsContext);

  const handleAddToCart = (e) => {
    e.target.classList.add("added");
    onAddToCart(product);
  };

  const ButtonText = () => {
    return cartItems.includes(product) ? "Já foi pedido" : "Adicionar";
  };

  return (
    <ProductCard>
      <PicContainer>
        <ProductPic src={product.img} alt={product.name} />
      </PicContainer>
      <ProductName>{product.name}</ProductName>
      <Category>{product.category}</Category>
      <Price>R$: {formatToMoney(product.price)}</Price>
      <AddButton
        className={cartItems.includes(product) ? "added" : ""}
        onClick={(e) => handleAddToCart(e)}
      >
        {ButtonText()}
      </AddButton>
    </ProductCard>
  );
};

export default Product;
