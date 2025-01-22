import styled from "styled-components";

export const StyledButton = styled.button`
  width: 11.26rem;
  height: 3.375rem;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.5rem;
  text-align: center;
  background-color: transparent;
  color: #ffffff;
  border: 0.125rem solid #f5f5f5;
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background: #000000e5;
    border: 0.125rem solid #2271d1;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: 768px) {
    width: 9rem; /* Reducir el ancho en pantallas pequeñas */
    height: 2.5rem; /* Reducir la altura en pantallas pequeñas */
    font-size: 1.1rem; /* Reducir el tamaño de fuente en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    width: 7rem; /* Reducir aún más en pantallas más pequeñas */
    height: 2.2rem; /* Ajustar altura aún más */
    font-size: 1rem; /* Reducir tamaño de fuente aún más */
  }
`;
