import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 18.75rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 15rem; /* Reducir el tamaño de la tarjeta en pantallas medianas */
  }

  @media (max-width: 480px) {
    width: 12rem; /* Ajustar aún más el tamaño de la tarjeta en pantallas pequeñas */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;

  &:hover {
    color: #2271d1;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem; /* Reducir el tamaño de los iconos en pantallas más pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Reducir aún más el tamaño de los iconos en pantallas muy pequeñas */
  }
`;
