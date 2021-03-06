import React from 'react';

import {
  Header,
  PageWrapper,
  Title,
  CarShops,
  CarShop,
} from '../styles/pages/home';

export default function Home() {
  return (
    <>
      <Header />
      <Title>Car Shops</Title>
      <PageWrapper>
        <CarShops>
          <CarShop>
            <div />
            <h2>Test</h2>
          </CarShop>
          <CarShop>
            <div />
            <h2>Test</h2>
          </CarShop>
          <CarShop>
            <div />
            <h2>Test</h2>
          </CarShop>
          <CarShop>
            <div />
            <h2>Test</h2>
          </CarShop>
          <CarShop>
            <div />
            <h2>Test</h2>
          </CarShop>
        </CarShops>
      </PageWrapper>
    </>
  );
}
