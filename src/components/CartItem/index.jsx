import React, { useContext } from 'react';
import styled from 'styled-components';

import { CartItemsContext } from "../../shared/CartItemsContext";
import { formatToMoney } from '../../shared/formatToMoney';

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  button {
    padding: 0;
    margin-right: 10px;
    height: 30px;
    font-size: 23px;
    display: inline-block;
    background-color: transparent;
    color: #BDBDBD;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: start;
`;

const ProductInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  background-color: rgb(245, 245, 245);
  width: 100px;
  height: 100px;
  display: flex;
  text-align: center;
  vertical-align: middle;
  margin-right: 10px;

  img {
    height: 80%;
    margin: auto;
  }
`;


const CartItem = ({ item }) => {
  const { cartItems, setCartItems, totalItemsPrice } = useContext(CartItemsContext);

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    totalItemsPrice.current -= product.price;
  };

  return (
    <Product>
      <ProductInfo>
        <ImageBox>
          <img src={item.img} alt={item.name} />
        </ImageBox>

        <ProductInfoText>
          <h3>{item.name}</h3>
          <p>R$: {formatToMoney(item.price)}</p>
        </ProductInfoText>
      </ProductInfo>
      
      <button><i className="fa-solid fa-trash" onClick={() => handleRemoveFromCart(item)}></i></button>
    </Product>
  );
};

export default CartItem;
