import React, { useContext, useState } from "react";
import CartModal from "../CartModal/index";
import styled from "styled-components";
import logoBurguer from "../../assets/Mask Group.png";

const HeaderWrapper = styled.header`
  display: inline-block;
  width: 100%;
  padding: 20px 80px;
  background-color: #f5f5f5;

  @media (max-width: 900px) {
    padding: 20px 20px;
  }
`;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const FirstCol = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media (max-width: 900px) {
    width: 100%;
    padding-bottom: 10px;
  }
`;

const Logo = styled.img`
  align-self: center;
  @media (max-width: 30rem) {
    margin-left: 10px;
  }
`;

const CapsDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 30%;

  @media (max-width: 900px) {
    width: 100%;
    display: block;
  }
`;

const SearchInput = styled.input`
  padding: 0px 10px 0px 15px;
  width: 100%;
  height: 60px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  color: #e0e0e0;

  &::placeholder {
    color: #e0e0e0;
  }
`;

const SearchButton = styled.button`
  border-radius: 10px;
  background-color: #27ae60;
  color: white;
  font-size: 14px;
  padding: 12px 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const CartButton = styled.button`
  border-radius: 4px;
  background-color: transparent;
  color: #bdbdbd;
  font-size: 23px;
  position: relative;
  top: 6px;
  cursor: pointer;
`;

const ItemsQty = styled.span`
  background-color: #27ae60;
  color: white;
  padding: 2px 5px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  top: 2px;
  right: 17px;
`;

const Header = ({ onSearch, cartItems, onClearCart }) => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  const handleCartClick = () => {
    setShowCartModal(true);
  };

  const handleCartModalClose = () => {
    setShowCartModal(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <FirstCol>
          <Logo src={logoBurguer} alt="Logo" />
          <CartButton onClick={handleCartClick}>
            <i className="fa-solid fa-cart-shopping"></i>
            <ItemsQty>{cartItems.length}</ItemsQty>
          </CartButton>
        </FirstCol>
        <CapsDiv>
          <SearchInput
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Digitar Pesquisa"
          />
          <SearchButton>
            <i className="fa-solid fa-magnifying-glass"></i>
          </SearchButton>
        </CapsDiv>
      </HeaderContainer>
      {showCartModal && (
        <CartModal
          cartItems={cartItems}
          onClose={handleCartModalClose}
          onClearCart={onClearCart}
        />
      )}
    </HeaderWrapper>
  );
};

export default Header;
