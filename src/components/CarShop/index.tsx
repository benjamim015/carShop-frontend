import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

interface CarShopProps {
  id: string;
  name: string;
  image: string;
}

const CarShop = ({ id, name, image }: CarShopProps) => (
  <Link href={`/car-shop/${id}`}>
    <Container>
      {image ? (
        <img
          src={`http://localhost:3333/static/${image}`}
          alt={name}
          width="256"
          height="208"
        />
      ) : (
        <div />
      )}
      <h2>{name}</h2>
    </Container>
  </Link>
);

export default CarShop;
