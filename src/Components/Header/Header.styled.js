import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkNav = styled(NavLink)`
  &.active button {
    background: #000000e5;
    border: 0.125rem solid #2271d1;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }
`;

export const Logo = styled.img`
  height: 3.125rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    height: 2.5rem; /* Reducir tamaño en pantallas medianas */
    margin-right: 1.5rem; /* Ajustar margen en pantallas más pequeñas */
  }

  @media (max-width: 480px) {
    height: 2rem; /* Reducir aún más en pantallas móviles */
    margin-right: 1rem; /* Ajustar margen en dispositivos pequeños */
  }
`;

export const Nav = styled.nav`
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding: 1rem 2rem; /* Reducir padding en pantallas medianas */
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Cambiar a columna en dispositivos móviles */
    padding: 0.75rem 1rem; /* Reducir padding en pantallas más pequeñas */
    justify-content: center; /* Centrar los elementos en pantallas móviles */
  }
`;

export const NavContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: auto; /* Hacer que el contenedor se ajuste en pantallas medianas */
    flex-direction: column; /* Cambiar la disposición a columna */
    align-items: flex-start; /* Alinear los elementos al principio en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    width: 100%; /* Hacer que el contenedor ocupe el 100% del ancho en pantallas móviles */
    align-items: center; /* Centrar los elementos en dispositivos pequeños */
  }
`;
