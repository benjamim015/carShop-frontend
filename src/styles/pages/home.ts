import styled from 'styled-components';

export const Header = styled.header`
  background: #29292e;
  width: 100%;
  height: 120px;
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  display: flex;
  white-space: nowrap;
  color: #dc1839;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &:after {
    border-top: 2px solid #dc1839;
    content: '';
    position: relative;
    top: 20px;
    width: 100%;
    margin-left: 15px;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CarShops = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
