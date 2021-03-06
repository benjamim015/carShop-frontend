import React from 'react';
import Link from 'next/link';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';

import { Container, Wrapper } from './styles';

interface HeaderProps {
  showArrowBack?: boolean;
}

const Header = ({ showArrowBack }: HeaderProps) => (
  <Container>
    {showArrowBack && (
      <Link href="/">
        <a>
          <FiArrowLeft size={50} color="#dc1839" />
        </a>
      </Link>
    )}
    <Wrapper>
      <div>
        <h1>Shopcar,</h1>
        <p>buy your new car now!</p>
      </div>
      <div>
        <FiPlus size={150} color="#29292e" />
      </div>
    </Wrapper>
  </Container>
);

export default Header;
