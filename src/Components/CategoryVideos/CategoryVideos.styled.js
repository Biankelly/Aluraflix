import styled from "styled-components";

export const CategoryTitle = styled.h2`
  width: 25%;
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  color: #fff;
  padding: 1rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 40%; /* Reducir el ancho en pantallas medianas */
    font-size: 1.5rem; /* Reducir el tamaño del texto */
  }

  @media (max-width: 480px) {
    width: 100%; /* Hacerlo de ancho completo en pantallas pequeñas */
    font-size: 1.2rem; /* Reducir más el tamaño del texto */
    text-align: center; /* Centrar el texto */
  }
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center; /* Centrar la lista en pantallas medianas */
  }

  @media (max-width: 480px) {
    justify-content: space-around; /* Mejor distribución en pantallas muy pequeñas */
  }
`;
