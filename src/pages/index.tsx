import { GetServerSideProps } from 'next';
import React from 'react';

import api from '../services/api';
import CarShop from '../components/CarShop';
import Header from '../components/Header';

import { PageWrapper, Title, CarShops } from '../styles/pages/home';

interface CarShopProps {
  id: string;
  name: string;
  image: string;
}

interface HomeProps {
  carShops: Array<CarShopProps>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/carShops');
  const carShops = res.data;

  return {
    props: {
      carShops,
    },
  };
};

export default function Home({ carShops }: HomeProps) {
  return (
    <>
      <Header />
      <Title>Car Shops</Title>
      <PageWrapper>
        <CarShops>
          {carShops ? (
            carShops.map(carShop => (
              <CarShop
                key={carShop.id}
                id={carShop.id}
                image={carShop.image}
                name={carShop.name}
              />
            ))
          ) : (
            <p>We don&apos;t have a registered car shop yet :(</p>
          )}
        </CarShops>
      </PageWrapper>
    </>
  );
}
