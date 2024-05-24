import React, { useContext } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import CartItem from "../CartItem/index";

import { formatToMoney } from "../../shared/formatToMoney";
import { CartItemsContext } from "../../shared/CartItemsContext";

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 100;
  min-width: 393px;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  position: relative;
  z-index: 200;
  width: 500px;
  border-radius: 5px;
  margin: 0 auto;
  padding-bottom: 20px;

  p {
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 350px;
  }
`;

const Header = styled.div`
  background-color: #27ae60;
  color: white;
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  span {
    padding: 6px 0;
  }

  button {
    background-color: transparent;
    padding: 0 10px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const ProductsList = styled.div`
  padding: 0 20px;
  width: 100%;
  max-height: 50vh;
  overflow-x: hidden;

  p {
    color: #828282;
    padding: 20px 0 0;
  }

  hr {
    background-color: #E0E0E0;
    height: 2px; 
    border: 0;
  }
`;

const Footer = styled.div`
  padding: 0 20px;

  button {
    text-align: center;
    background-color: #E0E0E0;
    color: #828282;
    width: 100%;
    padding: 20px 0;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  span:nth-child(2n) {
    color: #828282;
  }
`;

const CartModal = ({ cartItems, onClose, onClearCart }) => {
  const body = document.querySelector("body");
  const { totalItemsPrice } = useContext(CartItemsContext);

  useEffect(() => {
    body.style.overflowY = "hidden";
    body.addEventListener('keydown', listenKey);
  }, []);

  const listenKey = (e) => {
      if (e.key === 'Escape') destroyComponent();
  }

  const destroyComponent = () => {
      document.querySelector("body").style.overflowY = "auto";
      body.removeEventListener('keydown', listenKey);
      onClose();
  }

  const handleClose = (el) => {
    if (el.target.getAttribute('data-close')) destroyComponent();
  };

  const handleClearCart = () => {
    onClearCart();
  };

  return (
    <>
      <Background data-close={true} onClick={(el) => handleClose(el)}>
        <Modal>
          <Header>
            <span>Carrinho de compras</span>
            <button data-close={true}>X</button>
          </Header>

          { cartItems.length > 0 ? (
            <ProductsList>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <hr />
            </ProductsList>
          ) : 
            <ProductsList>
              <p>O carrinho está vazio.</p>
            </ProductsList> }

          { cartItems.length > 0 && (
            <Footer>
              <br />
              <TotalPrice>
                <span>Total:</span>
                <span>R$: {formatToMoney(totalItemsPrice.current)}</span>
              </TotalPrice>
              <br />
              <button onClick={handleClearCart}>Remover Todos</button>
            </Footer>
          ) }
        </Modal>
      </Background>
    </>
  );
};

export default CartModal;
