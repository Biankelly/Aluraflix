import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 95%; /* Hacer el modal más grande en pantallas medianas */
    max-width: 400px; /* Limitar el tamaño máximo en pantallas medianas */
  }

  @media (max-width: 480px) {
    width: 100%; /* El modal ocupa toda la pantalla en dispositivos móviles */
    max-width: none; /* Eliminar límite de tamaño máximo en móviles */
  }
`;

export const ModalHeader = styled.div`
  background: #03122f;
  color: white;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  button {
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reducir el padding en pantallas pequeñas */
    h2 {
      font-size: 16px; /* Reducir el tamaño del título */
    }
  }
`;

export const ModalBody = styled.div`
  padding: 15px;

  label {
    display: block;
    margin-bottom: 10px;

    input,
    textarea {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reducir padding en dispositivos móviles */
    label {
      font-size: 14px; /* Reducir tamaño de fuente en pantallas pequeñas */
    }

    input,
    textarea {
      padding: 6px; /* Reducir padding de los campos */
    }
  }
`;

export const ModalFooter = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:first-child {
      background: #007bff;
      color: white;
    }

    &:last-child {
      background: #ccc;
      color: black;
    }
  }

  @media (max-width: 480px) {
    padding: 10px; /* Reducir padding en dispositivos móviles */
    button {
      padding: 6px 12px; /* Reducir tamaño de los botones */
      font-size: 14px; /* Reducir tamaño de fuente en botones */
    }
  }
`;
