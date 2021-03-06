import { GetServerSideProps } from 'next';
import React from 'react';
import api from '../services/api';
import CarShop from '../components/CarShop';

import { Header, PageWrapper, Title, CarShops } from '../styles/pages/home';

interface HomeProps {
  carShops: {
    id: string;
    name: string;
    image: string;
  };
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
          <CarShop />
          <CarShop />
          <CarShop />
          <CarShop />
          <CarShop />
        </CarShops>
      </PageWrapper>
    </>
  );
}
