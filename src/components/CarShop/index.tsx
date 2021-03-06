import React from 'react';

import { Container } from './styles';

interface CarShopProps {
  name: string;
  image: string;
}

const CarShop = ({ name, image }: CarShopProps) => (
  <Container>
    <img
      src={`http://localhost:3333/static/${image}`}
      alt={name}
      width="256"
      height="208"
    />
    <h2>{name}</h2>
  </Container>
);

export default CarShop;
