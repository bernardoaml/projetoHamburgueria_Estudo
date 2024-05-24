import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import ProductsList from "../src/components/ProductsList/index";
import Header from "../src/components/Header/index";

import axios from "axios";

import { CartItemsContext } from "./shared/CartItemsContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const totalItemsPrice = useRef(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddToCart = (product) => {
    if (!cartItems.includes(product)) {
      setCartItems([...cartItems, product]);
      totalItemsPrice.current += product.price;
    };
  };

  const handleClearCart = () => {
    setCartItems([]);
    totalItemsPrice.current = 0;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <CartItemsContext.Provider value={{cartItems, setCartItems, totalItemsPrice}}>
        <Container>
          <Header
            onSearch={handleSearch}
            cartItems={cartItems}
            onClearCart={handleClearCart}
          />
          <ProductsList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </Container>
      </CartItemsContext.Provider>
    </>
  );
};

export default App;
