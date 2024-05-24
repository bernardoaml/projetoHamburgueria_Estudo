import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 20px;
`;

const Modal = ({ cartItems, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalWrapper onClick={handleClickOutside}>
      <ModalContent>
        <button onClick={onClose}>Fechar</button>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.value}</p>
            <button>Remover</button>
          </div>
        ))}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
