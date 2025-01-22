import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.color};
  width: 100%;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;

  @media (max-width: 768px) {
    padding: 0.75rem; /* Reducir padding en pantallas medianas */
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* Reducir padding aún más en dispositivos móviles */
  }
`;

export const Logo = styled.img`
  height: 3.125rem; /* 50px */

  @media (max-width: 768px) {
    height: 2.5rem; /* Reducir tamaño del logo en pantallas medianas */
  }

  @media (max-width: 480px) {
    height: 2rem; /* Reducir tamaño del logo en dispositivos móviles */
  }
`;
