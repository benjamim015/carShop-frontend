import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import api from '../../services/api';
import Header from '../../components/Header';
import {
  Title,
  PageWrapper,
  CarsContainer,
  CarContainer,
  InfoWrapper,
} from '../../styles/pages/carShop';

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: string;
  image: string;
}

interface CarShop {
  name: string;
  cars: Array<Car>;
}

interface CarShopProps {
  carShop: CarShop;
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params;
  const carShop = await api.get(`carShop/${id}`);
  return {
    props: {
      carShop: carShop.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export default function Home({ carShop }: CarShopProps) {
  return (
    <>
      <Header />
      <Title>{carShop.name}</Title>
      <PageWrapper>
        <CarsContainer>
          {carShop.cars.length === 0 && (
            <p>This car shop does not have a registered car yet :(</p>
          )}
          {carShop.cars.map(car => (
            <CarContainer key={car.id}>
              <img
                src={`http://localhost:3333/static/${car.image}`}
                width="256"
                height="256"
                alt={car.model}
              />
              <InfoWrapper>
                <span>
                  <strong>Brand:</strong>
                  {` ${car.brand}`}
                </span>
                <span>
                  <strong>Model:</strong>
                  {` ${car.model}`}
                </span>
                <span>
                  <strong>Year:</strong>
                  {` ${car.year}`}
                </span>
                <span>
                  <strong>Color:</strong>
                  {` ${car.color}`}
                </span>
                <span>
                  <strong>Price:</strong>
                  {` ${car.price}`}
                </span>
              </InfoWrapper>
            </CarContainer>
          ))}
        </CarsContainer>
      </PageWrapper>
    </>
  );
}
